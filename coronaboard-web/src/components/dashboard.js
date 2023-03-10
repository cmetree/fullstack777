import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { css } from '@emotion/react';
import { DashboardItem } from './dashboard-item';

export function Dashboard(props) {
  const { globalStats } = props;

  // 국가별 데이터의 각 필드별 합을 계산
  const {
    worldConfirmed,
    worldConfirmedPrev,
    worldDeath,
    worldDeathPrev,
    worldReleased,
    worldReleasedPrev,
  } = globalStats.reduce((acc, x) => {
    return {
      worldConfirmed: (acc.worldConfirmed || 0) + x.confirmed,
      worldConfirmedPrev: (acc.worldConfirmedPrev || 0) + x.confirmedPrev,
      worldDeath: (acc.worldDeath || 0) + x.death,
      worldDeathPrev: (acc.worldDeathPrev || 0) + x.deathPrev,
      worldReleased: (acc.worldReleased || 0) + x.released,
      worldReleasedPrev: (acc.worldReleasedPrev || 0) + x.releasedPrev,
    };
  }, {});

  const worldFatality = (worldDeath / worldConfirmed) * 100;
  const worldCountry = globalStats.filter((x) => x.confirmed > 0).length;
  const worldCountryPrev = globalStats.filter(
    (x) => (x.confirmedPrev || 0) === 0,
  ).length;

  // 대한민국 데이터를 별도 추출해서 사용
  const krData = globalStats.find((x) => x.cc === 'KR');
  const {
    confirmed,
    confirmedPrev,
    death,
    deathPrev,
    released,
    releasedPrev,
  } = krData;

  const fatality = (death / confirmed) * 100;


  return (
    <Container
      css={css`
        text-align: center;
        background-color: white;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid #dee2e6;

        h2 {
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 23px;
        }
      `}
    >
      <h2>전 세계</h2>
      <Row>
        <Col xs={6} md>
          <DashboardItem
            text="총 확진자"
            current={worldConfirmed}
            prev={worldConfirmedPrev}
          />
        </Col>
        <Col xs={6} md>
          <DashboardItem
            text="총 사망자"
            current={worldDeath}
            prev={worldDeathPrev}
          />
        </Col>
        <Col xs={6} md>
          <DashboardItem
            text="총 격리해제"
            current={worldReleased}
            prev={worldReleasedPrev}
            diffColor="green"
          />
        </Col>
        <Col xs={3} md>
          <DashboardItem text="치명률" current={worldFatality} unit="percent" />
        </Col>
        <Col xs={3} md>
          <DashboardItem
            text="선택 국가"
            current={worldCountry}
            prev={worldCountryPrev}
          />
        </Col>
      </Row>

      <h2 style={{color:'red'}}><b>대한민국</b></h2>
      <Row>
        <Col xs={6} md>
          <DashboardItem
            text="총 확진자"
            current={confirmed}
            prev={confirmedPrev}
          />
        </Col>
        <Col xs={6} md>
          <DashboardItem text="총 사망자" current={death} prev={deathPrev} />
        </Col>
        <Col xs={6} md>
          <DashboardItem
            text="총 격리해제"
            current={released}
            prev={releasedPrev}
            diffColor="green"
          />
        </Col>
        <Col xs={6} md>
          <DashboardItem text="치명률" current={fatality} unit="percent" />
        </Col>

      </Row>
    </Container>
  );
}
