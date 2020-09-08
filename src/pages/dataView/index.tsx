import React, { useState, useEffect } from 'react';
import { Pie, Column, Line } from '@ant-design/charts';
import { Row, Col, Divider } from 'antd';
const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '曲线折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线\u3002',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
  };
  return <Line {...config} />;
};
const DemoColumn: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础柱状图',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额(万)' },
    },
  };
  return <Column {...config} />;
};
const DemoPie: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-图形标签蜘蛛布局',
    },
    // description: {
    //   visible: true,
    //   text:
    //     '当把饼图label的类型设置为spider时\uFF0C标签分为两组\uFF0C在图表两侧拉线对齐显示\u3002一般来说\uFF0C蜘蛛布局的label更不容易相互遮挡\u3002',
    // },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'spider',
    },
  };

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <Pie {...config} />;
        </Col>
        <Col className="gutter-row" span={8}>
          <Pie {...config} />;
        </Col>
        <Col className="gutter-row" span={8}>
          <Pie {...config} />;
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <DemoColumn></DemoColumn>
        </Col>
        <Col className="gutter-row" span={8}>
          <DemoColumn></DemoColumn>
        </Col>
        <Col className="gutter-row" span={8}>
          <DemoColumn></DemoColumn>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <DemoLine></DemoLine>
        </Col>
        <Col className="gutter-row" span={8}>
          <DemoLine></DemoLine>
        </Col>
        <Col className="gutter-row" span={8}>
          <DemoLine></DemoLine>
        </Col>
      </Row>
    </>
  );
};
export default DemoPie;
