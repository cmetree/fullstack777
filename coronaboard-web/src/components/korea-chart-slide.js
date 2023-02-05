import React from 'react';
import { css } from '@emotion/react';
import { Slide } from './slide';
import { KoreaBySexChart } from './chart/korea-by-sex-chart';
import { KoreaByAgeChart } from './chart/korea-by-age-chart';

export function KoreaChartSlide(props) {
  const { id, dataSource } = props;
  const {
    koreaBySexChartData,
    koreaByAgeChartData,
  } = dataSource;

  return (
    <Slide id={id} title="국내 차트">
      <div
        css={css`
          .card {
            margin-top: 20px;
          }
        `}
      >
        <KoreaBySexChart koreaBySexChartData={koreaBySexChartData} />
        <KoreaByAgeChart koreaByAgeChartData={koreaByAgeChartData} />
      </div>
    </Slide>
  );
}
