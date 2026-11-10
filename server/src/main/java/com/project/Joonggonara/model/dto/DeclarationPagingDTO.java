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
public class DeclarationPagingDTO {

    private List<DeclarationDTO> declarationDTO;
    private PageMakerDTO pageMake;

}
