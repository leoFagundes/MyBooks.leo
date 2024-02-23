import { DivFilterContainer } from "@/app/styled";
import React, { Fragment } from "react";
import { Title } from "../styledComponents/Title.styled";

type FilterValueType = {
  name: string;
  genre: string;
};

export default function OutPutFilter({
  filterValue,
}: {
  filterValue: FilterValueType;
}) {
  return (
    <DivFilterContainer title="Remover Filtros">
      <Title
        fontFamily="'Hedvig Letters Serif', serif;"
        fontSize="150%"
        color="#fff"
      >
        Filtros Aplicados
      </Title>
      {filterValue.name !== "" || filterValue.genre !== "" ? (
        <div className="filterMessage">
          <p>
            <strong>Contém: </strong>
            {filterValue.name}
          </p>
          <p>
            <strong>Gênero: </strong>
            {filterValue.genre}
          </p>
        </div>
      ) : (
        <div className="noFilterMessage">
          <p>
            <strong>
              <i>Nenhum filtro aplicado!</i>
            </strong>
          </p>
        </div>
      )}
    </DivFilterContainer>
  );
}
