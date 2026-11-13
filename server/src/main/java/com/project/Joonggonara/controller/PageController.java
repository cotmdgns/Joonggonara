package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.NoticeDTO;
import com.project.Joonggonara.model.dto.UserProfileDTO;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
import com.project.Joonggonara.model.vo.JGNoticeSubcribe;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/myPage/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class PageController {

    @Autowired
    private PageService pageService;

    @Autowired
    private MainService mainService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private UserService userService;


    /* 사용자 정보 가져오기 [ 분명 다른 컨트롤에서 사용하고 있을게 있을 거같은데 귀찮~]  */
    @PostMapping("selectUserInfo/{code}")
    public JGUserInfo selectUserInfo(@PathVariable("code")int code){
        return pageService.selectUserInfo(code);
    };


    /* 전체 상품 리스트 */
    @GetMapping("selectUserProduct/{code}")
    public List<NoticeDTO> selectUserProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.selectUserProduct(code);
        return dtoList(list,code);
    };
    /* 구메 내역 */
    @GetMapping("purchaseHistoryProduct/{code}")
    public List<NoticeDTO> purchaseHistoryProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.purchaseHistoryProduct(code);
        return dtoList(list,code);
    };
    /* 관심 상품 */
    @GetMapping("interestProduct/{code}")
    public List<NoticeDTO> interestProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.interestProduct(code);
        return dtoList(list,code);
    };
    /* 판매 중 */
    @GetMapping("saleProduct/{code}")
    public List<NoticeDTO> saleProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.saleProduct(code);
        return dtoList(list,code);
    };
    /* 구매 완료 */
    @GetMapping("buyProduct/{code}")
    public List<NoticeDTO> buyProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.buyProduct(code);
        return dtoList(list,code);
    };
    /* 무료 나눔 */
    @GetMapping("freeProduct/{code}")
    public List<NoticeDTO> freeProduct(@PathVariable("code") int code){
        List<JGNotice> list = pageService.freeProduct(code);
        return dtoList(list,code);
    };

    // 필요한 정보만 모와서 DTO 만드는 메서드
    public List<NoticeDTO> dtoList(List<JGNotice> list, int code){
        List<NoticeDTO> result = new ArrayList<>();
        for(JGNotice data : list){
            // 코드로 이미지들 가져오고
            List<JGNoticeImg> img = mainService.searchNoticeSelectImg(data.getJGNoticeCode());

            // 내 코드로 저장되어있는게 있는지 확인하기
            JGNoticeSubcribe jgNoticeSubcribe = JGNoticeSubcribe.builder()
                    .jGNoticeCode(data.getJGNoticeCode())
                    .userCode(code)
                    .build();

            JGNoticeSubcribe boo = noticeService.subscribeNoticeSelect(jgNoticeSubcribe);

            Boolean check = false;
            if(boo != null){
                check = true;
            }

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
                    .checkBoo(check)
                    .build();
            result.add(noticeDTO);
        }
        return result;
    }

    private String url = "C:\\github\\img\\userProfile\\";

    @PostMapping("userProfileUpdate")
    public String userProfileUpdate(UserProfileDTO dto){
        // 1. 클라이언트에서 받은 코드로 사용자 가져오기
        log.info("데이터 확인하기 : "+ dto);
        JGUserInfo info = pageService.pwdCheck(dto.getUserCode());
        PasswordEncoder encoder = new BCryptPasswordEncoder();

        if(dto.getUserOldPwd() != null && !dto.getUserOldPwd().isEmpty()) {
            if(!encoder.matches(dto.getUserOldPwd(), info.getUserPwd())) {
                return "notPassword";
            }
            // 새 비밀번호
            dto.setUserNewPwd(encoder.encode(dto.getUserNewPwd()));
        }

        try {
            String fileName = "";
            if(dto.getUserProfile() != null){
                fileName = fileUpload(dto.getUserProfile(),dto.getUserCode(),url);
            }
            dto.setUserProfileName(fileName);
            JGUserInfo vo = userService.selectUserInfo(dto.getUserCode());
            // 안에 존재하냐
            // 값이 널이 아니지?
            if(!vo.getUserImg().isEmpty() && vo.getUserImg()!=null){
                log.info("삭제까지 들어오는가?");
                // 그럼 이 주소로 해서
                File imgDelete = new File(url + vo.getUserCode() + File.separator + vo.getUserImg());
                // 지울게
                imgDelete.delete();
            }
            pageService.userIdUpdate(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        // 가져온 파일 이름으로


        return null;
    }

    public String fileUpload(MultipartFile file, int code, String url) throws IOException {
        UUID uuid = UUID.randomUUID();
        String fileName = uuid.toString()+"_"+file.getOriginalFilename();
        File dir = new File(url + File.separator + code);
        if (!dir.exists()) {
            dir.mkdirs(); // 없으면 생성
        }
        File copyFile = new File(dir, fileName);
        file.transferTo(copyFile);
        return fileName;
    }

}
