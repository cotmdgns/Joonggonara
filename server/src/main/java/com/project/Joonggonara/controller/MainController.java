package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.*;
import com.project.Joonggonara.model.vo.*;
import com.project.Joonggonara.service.AdminService;
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
@RequestMapping("/api/main/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class MainController {


           // 내 파일 위치

    @Autowired
    private MainService mainService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private NoticeService noticeService;

    // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
    @GetMapping("mainBannerSelectList")
    public List<NotificationManagement> mainBannerSelectList(){
        // 리스트로 담겨 있음
        return mainService.mainBannerSelect();
    }

    // 메뉴바에 사용할 카테고리 메이저 리스트
    @GetMapping("categoryMajorList")
    public List<CategoryStateMajor> categoryMajorList(){
        return adminService.selectCategoryMajor();
    }

    // 메뉴바에 사용할 카테고리 마이너 리스트
    @GetMapping("categoryMinorList/{code}")
    public List<CategoryDTO> categoryMinorList(@PathVariable("code")int code){
        // 이거 따로 분리해서 보내야 함씨아아아발
        List<CategoryDTO> dto = new ArrayList<>();
        List<CategoryStateMinor> categoryStateMinorList = adminService.SelectCategoryMinor(code);
        for(CategoryStateMinor list : categoryStateMinorList){
            List<CategoryStateMinor> aw = adminService.categoryMinorListSelect(list.getCategoryStateMinorCode());
            CategoryDTO data = CategoryDTO.builder()
                    .categoryStateMinorBig(list)
                    .categoryStateMinorSmall(aw)
                    .build();
            dto.add(data);
        }
        return dto;
    }

    // 사용자 코드로 주소 찾고 해당 주소로 등록된 게시글 찾기
    @GetMapping("userAddressSelect/{code}")
    public List<NoticeDTO> userAddressSelect(@PathVariable("code") int code){
        List<JGNotice> list = mainService.selectUserAddressNotification(code);

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

    // DB에서 현재 날짜에서 일주일 전 데이터 가져와서 보내주기
    @GetMapping("newNotificationSelect/{code}")
    public List<NoticeDTO> newNotificationSelect(@PathVariable("code") String code){
        log.info("데이터 확인하기 : " + code);
        List<JGNotice> list = mainService.selectNoticeDATE();
        // 검색과 데이터 보내는 방식은 같지만 좀 더 다름
        // 게시글 찾는 쿼리만 다를 뿐 밑에 데이터 정리해서 보내주는건 같음

        // 데이터 담기 위한 리스트
        List<NoticeDTO> result = new ArrayList<>();


        // 반복문
        for(JGNotice data : list){
            // 코드로 이미지들 가져오고
            List<JGNoticeImg> img = mainService.searchNoticeSelectImg(data.getJGNoticeCode());


            if(code != null){
                // 내 코드로 저장되어있는게 있는지 확인하기
                JGNoticeSubcribe jgNoticeSubcribe = JGNoticeSubcribe.builder()
                        .jGNoticeCode(data.getJGNoticeCode())
                        .userCode(Integer.parseInt(
                                code == null || code.equals("null") ? "1" : code
                        ))
                        .build();

                JGNoticeSubcribe boo = noticeService.subscribeNoticeSelect(jgNoticeSubcribe);

                Boolean check = false;
                if(boo != null){
                    check = true;
                }
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
                    .build();
            result.add(noticeDTO);
        }

        return result;
    }




}
