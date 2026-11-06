import { useEffect, useState } from "react";
import Editor from "../../admin/component/Editor";
import { selectNotificationDetailAPI } from "../api/NotificationAPI";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";

const NotificationDetail = () =>{

    const param = useParams();
    const [notificationDetail,setNotificationDetail] = useState("");
    
    const selectNotificationDetail = async () =>{
        const result = await selectNotificationDetailAPI(param.code)
        setNotificationDetail(result.data)
    }

    useEffect(()=>{
        selectNotificationDetail()
    },[])
    return (
        <div id="notificationDetail">
        <div id="notificationDetailBox">
            <div id="notificationDetailBoxHeader">공지사항 상세 페이지</div>
            <div id="notificationDetailBoxCenter">
                <div id="title" text="text">
                {notificationDetail.notificationManagementTitle}
                </div>
                <ReactQuill
                    id="Editor-box"
                    theme="snow"
                    modules={{ toolbar: false }}
                    value={notificationDetail.notificationManagementText}
                    readOnly="true"
                    />
            </div>
        </div>
        </div>
    )
}

export default NotificationDetail;