package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.NoticeDTO;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
import com.project.Joonggonara.model.vo.JGNoticeSubcribe;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.AdminService;
import com.project.Joonggonara.service.MainService;
import com.project.Joonggonara.service.NoticeService;
import com.project.Joonggonara.service.PageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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


}
