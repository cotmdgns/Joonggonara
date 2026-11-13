package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SynthesisDTO {

    private List<NoticeDTO> noticeDTOS;
    private PageMakerDTO pageMake;

}
