import React from 'react'
import { Button, Col, Collapse, Row } from 'antd'
import InputProperty from './InputProperty'
import { DELETE_STEP } from './actions'
import { useStore } from './store'

const { Panel } = Collapse

function PropertyRow({ label, children }) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>{label}</Col>
      <Col span={12}>{children}</Col>
    </Row>
  )
}

function Sidebar() {
  const { state, dispatch } = useStore()
  const { currentStep } = state

  function handleDelete() {
    dispatch(DELETE_STEP(currentStep))
  }

  if (currentStep !== null) {
    return (
      <div className="kf-sidebar">
        <div className="ts-header">
          CSS Properties at <span>{currentStep}</span>%
        </div>
        <div className="ts-subheader">
          Don't forget units when necessary.
          <br />
          <small>& if you change a value on one step, it should have a value on
            every step, even if it's the same or 0.</small>
        </div>

        <Collapse defaultActiveKey={['1']}>
          <Panel header="Transform" key="1">
            <PropertyRow label="Rotate">
              <InputProperty name="rotate" />
            </PropertyRow>
            <PropertyRow label="Scale">
              <InputProperty name="scale" />
            </PropertyRow>
            <PropertyRow label="TranslateX">
              <InputProperty name="translateX" />
            </PropertyRow>
            <PropertyRow label="TranslateY">
              <InputProperty name="translateY" />
            </PropertyRow>
            <PropertyRow label="SkewX">
              <InputProperty name="skewX" />
            </PropertyRow>
            <PropertyRow label="SkewY">
              <InputProperty name="skewY" />
            </PropertyRow>
            <PropertyRow label="Transform Origin">
              <InputProperty name="transform-origin" />
            </PropertyRow>
          </Panel>
          <Panel header="Colors & Font" key="2">
            <PropertyRow label="Background">
              <InputProperty name="background" />
            </PropertyRow>
            <PropertyRow label="Opacity">
              <InputProperty name="opacity" />
            </PropertyRow>
            <PropertyRow label="Color (Text)">
              <InputProperty name="color" />
            </PropertyRow>
            <PropertyRow label="Font Size">
              <InputProperty name="font-size" />
            </PropertyRow>
            <PropertyRow label="Font Weight">
              <InputProperty name="font-weight" />
            </PropertyRow>
          </Panel>
          <Panel header="Size & Spacing" key="3">
            <PropertyRow label="Width">
              <InputProperty name="width" />
            </PropertyRow>
            <PropertyRow label="Height">
              <InputProperty name="height" />
            </PropertyRow>
            <PropertyRow label="Margin">
              <InputProperty name="margin" />
            </PropertyRow>
            <PropertyRow label="Padding">
              <InputProperty name="padding" />
            </PropertyRow>
          </Panel>
          <Panel header="Border & Shadow" key="4">
            <PropertyRow label="Border">
              <InputProperty name="border" />
            </PropertyRow>
            <PropertyRow label="Box Shadow">
              <InputProperty name="box-shadow" />
            </PropertyRow>
            <PropertyRow label="Outline">
              <InputProperty name="outline" />
            </PropertyRow>
          </Panel>
        </Collapse>

        <Button type="primary" danger block onClick={handleDelete}>
          Delete Step at {currentStep}%
        </Button>
      </div>
    )
  } else {
    return <></>
  }
}

export default Sidebar
