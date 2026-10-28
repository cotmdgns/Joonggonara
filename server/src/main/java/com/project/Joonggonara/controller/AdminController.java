package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.model.dto.FormDataDTO;
import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.vo.*;
import com.project.Joonggonara.service.AdminService;
import com.project.Joonggonara.service.UserService;
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
@RequestMapping("/api/admin/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class AdminController {

    // 서로 파일 위치 다른 이유는 저장위치가 달라서
    // 노트북은 C드라이브, 컴퓨터는 D드라이브 (C용량이 너무 없음 ㅎ;)
    private String laptop = "C:\\github\\img\\";         // 내 노트북 파일 위치
    private String computer = "";       // 내 컴퓨터 파일 위치

    @Autowired
    private AdminService adminService;

    // 사용자 서비스
    @Autowired
    private UserService userService;




    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 메인 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    @GetMapping("mainSelectUseAll") /* <!-- 전체사용자 [ 정상 작동함 ]  --> */
    public int mainSelectUseAll(){
        return adminService.mainSelectUseAll().size();
    };

    @GetMapping("mainSelectNoticeAll") /* <!-- 전체게시글  [ 정상 작동함 ] --> */
    public int mainSelectNoticeAll(){
        return adminService.mainSelectNoticeAll().size();
    };

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 공지사항 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    @GetMapping("adminNotificationManagementSelect") /* <!-- [ 어드민 ] 공지사항 전체조회 [ 정상작동 ] --> */
    public List<NotificationManagementDTO> adminNotificationManagementSelect(){
        // 나중에 페이징 적용해야 함
        List<NotificationManagementDTO> notificationManagementList = adminService.adminNotificationManagementSelect();
        for(NotificationManagementDTO list : notificationManagementList){
            String name = userService.selectID(list.getUserCode());
            list.setUserName(name);
        }
        return notificationManagementList;
    };

    @GetMapping("notificationManagementSelectDetail/{code}") /* <!-- [ 어드민, 일반 ] 공지사항 디테일 조회 --> */
    public NotificationManagementDTO notificationManagementSelectDetail(@PathVariable("code")int code){
        return adminService.notificationManagementSelectDetail(code);
    };




    @PostMapping("notificationManagementCreate") /* <!-- 공지사항 생성  [ 정상 작동함 ] --> */
    public boolean notificationManagementCreate(FormDataDTO formDataDTO){

        log.info("데이터 확인하기 유저코드 어딨니 : " + formDataDTO);

        try {
            if(formDataDTO.getBannerBooState()){
                // 배너 true로 되어 있고 만약 생성한다면 따로
                MultipartFile file = formDataDTO.getBannerFile();

                NotificationManagement notificationManagement = new NotificationManagement();
                // 1. 이걸로 DB에 저장하기
                if (file != null && !file.isEmpty()) {
                    notificationManagement.setNotificationManagementCode(formDataDTO.getUserCode());
                    notificationManagement.setNotificationManagementTitle(formDataDTO.getTitle());
                    notificationManagement.setNotificationManagementBannerBoo(formDataDTO.getBannerBooState());
                    notificationManagement.setNotificationManagementText(formDataDTO.getTextEditor());
                    notificationManagement.setUserCode(formDataDTO.getUserCode());
                    notificationManagement.setNotificationManagementImg("");
                }

                adminService.notificationManagementCreate(notificationManagement);
                int code = notificationManagement.getNotificationManagementCode();
//            log.info("데이터 확인하기 [code] : " + code);
                String fileName = fileUpload(file,code,laptop);
                FormDataDTO dto = FormDataDTO.builder()
                        .code(notificationManagement.getNotificationManagementCode())
                        .fileName(fileName)
                        .build();
//            log.info("데이터 확인하기 [dto] : " + dto);
                adminService.notificationManagementImgNameUpdate(dto);
            }else{
                // 배너 false 이면 파일복사와 폴더를 만들 필요없음으로 따로 로직 간단하게 돌리기
                NotificationManagement notificationManagement = new NotificationManagement();
                notificationManagement.setNotificationManagementCode(formDataDTO.getUserCode());
                notificationManagement.setNotificationManagementTitle(formDataDTO.getTitle());
                notificationManagement.setNotificationManagementBannerBoo(formDataDTO.getBannerBooState());
                notificationManagement.setNotificationManagementText(formDataDTO.getTextEditor());
                notificationManagement.setUserCode(formDataDTO.getUserCode());
                notificationManagement.setNotificationManagementImg("null");

                adminService.notificationManagementCreate(notificationManagement);
            }


            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    };

    @PostMapping("notificationManagementUpdate") /* <!-- 공지사항 수정 --> */
    public void notificationManagementUpdate(FormDataDTO formDataDTO){
        // 리턴값 나중에 변경하기
        NotificationManagement notificationManagement = NotificationManagement.builder()
                .notificationManagementText(formDataDTO.getTextEditor())
                .notificationManagementTitle(formDataDTO.getTitleUpdateState())
                .build();
        adminService.notificationManagementUpdate(notificationManagement);
    };

    @PostMapping("notificationManagementDelete/{code}") /* <!-- 공지사항 삭제 --> */
    public void notificationManagementDelete(@PathVariable("code") int code){
        // 리턴값 나중에 변경하기
        adminService.notificationManagementDelete(code);
    };

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@카테고리 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    // 카테고리 상태 보내기  [ 정상작동 ]
    @GetMapping("CategoryState")
    public List<CategoryStateMajor> CategoryState(){
        List<CategoryStateMajor> categoryStateMajor = adminService.selectCategoryMajor();
        return categoryStateMajor;
    }

    //    <!--  카테고리 메이저 생성하기 [ 정상 작동함 ]  -->
    @PostMapping("CategoryMajorCreate")
    public void CategoryMajorCreate(@RequestBody CategoryStateMajor categoryStateMajor){
        String text = categoryStateMajor.getCategoryStateMajorText();
        adminService.CategoryMajorCreate(text);
    };

    //    <!--  카테고리 메이저 삭제하기 [ 정상작동함 ] -->
    @PostMapping("CategoryMajorDelete/{code}")
    public void CategoryMajorDelete(@PathVariable("code") int code){
        adminService.CategoryMajorDelete(code);
    };

    //    <!--  카테고리 메이저 수정하기 [ 정상작동함 ] -->
    @PostMapping("CategoryMajorUpdate")
    public void CategoryMajorUpdate(@RequestBody CategoryStateMajor categoryStateMajor){
        adminService.CategoryMajorUpdate(categoryStateMajor);
    }
//    //    <!--  카테고리 마이너 전체 리스트 -->
    @PostMapping("CategoryMinorSelect/{code}")
    public List<CategoryStateMinor> CategoryMinorSelect(@PathVariable("code") int code){
        return adminService.SelectCategoryMinor(code);
    };

    //    <!--  카테고리 마이너 생성하기 [ 정상작동함 ]  -->
    @PostMapping("CategoryMinorCreate")
    public void CategoryMinorCreate(@RequestBody CategoryStateMinor categoryStateMinor){
        adminService.CategoryMinorCreate(categoryStateMinor);
    };

    //    <!--  카테고리 마이너 삭제하기  -->
    @PostMapping("CategoryMinorDelete/{code}")
    public void CategoryMinorDelete(@PathVariable("code") int code){
        adminService.CategoryMinorDelete(code);
    };
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/



    // 예전에 내가 만들 파일업로드
    // 1. 이미지 이름 겹치지 않게 UUID로 랜덤값 생성하고 넣은다음
    // 2. 이미지 복사하기전에 지정된 경로에 공지사항 코도로 파일만들기
    // 3. 해당 파일에 이미지를 복사하겠다
    //      ㄴ 복사한 이유는 예전 강사님이 알려주신건데 이게 제일 쉽고 빠르고 편하다 했음
    public String fileUpload(MultipartFile file,int noticeCode,String url) throws IOException {
        // 랜덤한 이름값
        UUID uuid = UUID.randomUUID();
        // getOriginalFilename 이게 클라이언트에서 가져온 이미지 이름으로 변경?
        String fileName = uuid.toString()+"_"+file.getOriginalFilename();
        // File.separator 이거는 // 뜻
        // 디렉토리 경로
        File dir = new File(url + File.separator + noticeCode);
        if (!dir.exists()) {
            dir.mkdirs(); // 없으면 생성
        }
        File copyFile = new File(dir, fileName);
        file.transferTo(copyFile);
        return fileName;
    }
}
