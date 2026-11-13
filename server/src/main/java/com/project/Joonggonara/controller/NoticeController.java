package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.*;
import com.project.Joonggonara.model.vo.*;
import com.project.Joonggonara.service.MainService;
import com.project.Joonggonara.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/notice/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private MainService mainService;

    private String laptop = "C:\\github\\img\\notice\\";


    // 상품 게시글 생성하기
    @PostMapping("noticeCreate")
    public void noticeCreate(@ModelAttribute NoticeStateDTO dto){
        log.info("데이터 확인하기 : " + dto);

        // 클라이언트에서 받은 데이터로 가져오기
        String minor = mainService.selectCategoryMinor(dto.getCategoryMinor());
        String minorList = mainService.selectCategoryMinor(dto.getCategoryMinorList());
        log.info("데이터 확인하기 : " + minor);
        log.info("데이터 확인하기 : " + minorList);

        // 게시글 따로 저장하기
        JGNotice notice = JGNotice.builder()
                .userCode(dto.getCode())
                .jGNoticeProductPrice(dto.isProductFree() ? "0" : dto.getProductPrice())
                .jGNoticeText(dto.getProductInfo())
                .jGNoticeTitle(dto.getProductName())
                .JGNoticeProductTypeMajor(dto.getCategoryMajor())
                .JGNoticeProductTypeMinor(minor)             // 이거는 코드로 받고 있어서 따로 카테고리 불러와야 함
                .JGNoticeProductTypeMinorList(minorList)         // 이것도 코드로 받고 있음
                .build();

        // 1단계 가공된 데이터를 DB에 전송하고 저장하기
        mainService.insertNotice(notice);
        int noticeCode = notice.getJGNoticeCode();

        // 이미지 따로 저장하기   [ 게시글 생성 후 키 따로 반납 받은다음 그걸로 생성하기 ]
        try {
            List<JGNoticeImg> list = new ArrayList<>();
            for(MultipartFile file : dto.getImgs()){
                String fileName= fileUpload(file,noticeCode,laptop);
                JGNoticeImg img = JGNoticeImg.builder()
                        .jGNoticeCode(notice.getJGNoticeCode())   // 위에있는 데이터가 정상적으로 생성 후 사용될 예정 [ 아직 코드 없음 ]
                        .jGNoticeImg(fileName)
                        .build();
                list.add(img);
            }
            // 2단계 가공 후 이미지이름을 DB에 저장하고 이미지파일은 따로 드라이브 어딘가에 저장하기.
            mainService.createImg(list);
        }catch (Exception e){
            log.info(""+ e);
        }
        // 끝
    }

    // 여기에 페이징 저장하고
    // 상품 검색하기  [ 페이징도 적용해야 함 ]
    @PostMapping("searchNoticeSelect")
    public SynthesisDTO searchNoticeSelect(@RequestBody SearchDTO dto){
        // 초기세팅
        Criteria cri = new Criteria(1,30);
        cri.setPageNum(dto.getNum());
        dto.setCri(cri);

        List<JGNotice> list = mainService.searchNoticeSelect(dto);
        List<NoticeDTO> result = new ArrayList<>();
        // 반복문

        int total = mainService.searchNoticeSelectTotal(dto);
        PageMakerDTO pageMake = new PageMakerDTO(cri, total);

        for(JGNotice data : list){
            // 코드로 이미지들 가져오고
            List<JGNoticeImg> img = mainService.searchNoticeSelectImg(data.getJGNoticeCode());
            NoticeDTO noticeDTO = NoticeDTO.builder()
                    .jGNoticeCode(data.getJGNoticeCode())
                    .jGNoticeTitle(data.getJGNoticeTitle())
                    .jGNoticeText(data.getJGNoticeText())
                    .jGNoticeProductPrice(data.getJGNoticeProductPrice())
                    .JGNoticeProductTypeMajor(data.getJGNoticeProductTypeMajor())
                    .JGNoticeProductTypeMinor(data.getJGNoticeProductTypeMinor())
                    .JGNoticeProductTypeMinorList(data.getJGNoticeProductTypeMinorList())
                    .userCode(data.getUserCode())
                    .jGNoticeCreate(data.getJGNoticeCreate())
                    .jGNoticeUpdate(data.getJGNoticeUpdate())
                    .jGNoticeDelect(data.getJGNoticeDelect())
                    .JGNoticeSaleBoo(data.getJGNoticeSaleBoo())
                    .firstImgName(img.get(0).getJGNoticeImg())
                    .firstImgCode(img.get(0).getJGNoticeImgCode())
                    .build();
            result.add(noticeDTO);
        }
        SynthesisDTO synthesisDTO = SynthesisDTO.builder()
                .noticeDTOS(result)
                .pageMake(pageMake)
                .build();

        return synthesisDTO;
    }

    // @@@@@@@@@@@@@@@@@@ 디테일 페이지 데이터 가져오기
    @GetMapping("selectProductData/{code}")
    public NoticeDetailDTO selectProductData(@PathVariable("code")int code){
        // 1. 코드로 게시글 찾기
        JGNotice notice = mainService.selectProductData(code);
        JGUserInfo info = mainService.selectUserInfoData(notice.getUserCode());
        List<JGNoticeImg> img = mainService.searchNoticeSelectImg(notice.getJGNoticeCode());


        String lastDay = mainService.lastSaleNotice(notice.getUserCode());
        int total = mainService.totalSaleNotice(notice.getUserCode());

        NoticeDetailDTO dto = NoticeDetailDTO.builder()
                .notice(notice)
                .jgUserInfo(info)
                .noticeImgs(img)
                .lastSale(lastDay)
                .saleTotal(total)
                .build();

        return dto;
    }
    // 내가 찜 저장한 게시글 상태 찾기
    @GetMapping("subscribeNoticeSelect")
    public boolean subscribeNoticeSelect(
            @RequestParam int jGNoticeCode,
            @RequestParam int userCode
    ){
        JGNoticeSubcribe jgNoticeSubcribe = JGNoticeSubcribe.builder()
                .jGNoticeCode(jGNoticeCode)
                .userCode(userCode)
                .build();

        JGNoticeSubcribe result = noticeService.subscribeNoticeSelect(jgNoticeSubcribe);
        if(result == null){
            // 없으니 생성 가능
            return true;
        }else{
            // 있으니 생성 불가능
            return false;
        }
    }

    // 찜 생성 [ 정상작동 ]
    @PostMapping("subscribeNoticeCreate")
    public void subscribeNoticeCreate(@RequestBody JGNoticeSubcribe jgNoticeSubcribe){
        log.info("생성 데이터 확인하기 : " + jgNoticeSubcribe);
        noticeService.subscribeNoticeCreate(jgNoticeSubcribe);
    };

    // 찜 취소
    @PostMapping("subscribeNoticeDelete")
    public void subscribeNoticeDelete(@RequestBody JGNoticeSubcribe jgNoticeSubcribe){
        noticeService.subscribeNoticeDelete(jgNoticeSubcribe);
    };

    // 신고 하기    [ 클라이언트에서 데이터까지 받음 ]
    @PostMapping("createDeclarationButton")
    public boolean createDeclarationButton(@RequestBody DeclarationDTO dto){

        int result = noticeService.createDeclarationButton(dto);
        if(result == 1){
            return true;
        }else{
            return false;
        }
    }

    // 구매하기 [ 딱히 대단한 작업은 없음, 게시글에 있는거 조건만 변경하기 ]
    @PostMapping("saleJGNotice")
    public void saleJGNotice(@RequestBody JGNotice jgNotice){
        jgNotice.setJGNoticeSaleBoo(true);
        log.info("구매하기 데이터 확인하기 : " + jgNotice);
        noticeService.saleJGNotice(jgNotice);
    };


//    //<!--    댓글 조회 , 게시글 코드 받고 -->
//    @GetMapping("selectComment/{code}")
//    public JGNoticeComment selectComment(@PathVariable("code") int code){
//        return noticeService.selectComment(code);
//    };
//    //<!--  댓글 생성  -->
//    @PostMapping("createComment")
//    public void createComment(@RequestBody JGNoticeComment jgNoticeComment){
//        noticeService.createComment(jgNoticeComment);
//    };
//    //<!--  댓글 수정  -->
//    @PostMapping("updateComment")
//    public void updateComment(@RequestBody JGNoticeComment jgNoticeComment){
//        noticeService.updateComment(jgNoticeComment);
//    };
//    //<!--  댓글 삭제  -->
//    @PostMapping("deleteComment/{code}")
//    public void deleteComment(@PathVariable("code") int code){
//        noticeService.deleteComment(code);
//    };
//



    public String fileUpload(MultipartFile file,int Code,String url) throws IOException {
        // 랜덤한 이름값
        UUID uuid = UUID.randomUUID();
        // getOriginalFilename 이게 클라이언트에서 가져온 이미지 이름으로 변경?
        String fileName = uuid.toString()+"_"+file.getOriginalFilename();
        // File.separator 이거는 // 뜻
        // 디렉토리 경로
        File dir = new File(url + File.separator + Code);
        if (!dir.exists()) {
            dir.mkdirs(); // 없으면 생성
        }
        File copyFile = new File(dir, fileName);
        file.transferTo(copyFile);
        return fileName;
    }
}
