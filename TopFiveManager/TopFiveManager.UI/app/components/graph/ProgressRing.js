import React from 'react';
import * as d3 from 'd3'

export default class ProgressRing extends React.Component {

  constructor(props){
    super(props)
    this.tau = Math.PI * 2;
  }
  componentDidMount() {
    this.drawArc()
  }

  componentDidUpdate(){
    this.redrawArc();
  }

  setBackground(context){
    return context.append('path')
      .datum({ endAngle: this.tau})
      .style('fill', '#dce6ec')
      .attr('d', this.arc());
  }

  drawArc(){
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc(){
    var { id } = this.props;
    const context = d3.select(`#${id}`)
    context.remove();
    this.drawArc();
  }

  setForeground(context){
    var { foregroundColor } = this.props
    return context.append('path')
        .datum({endAngle: 0})
        .style('fill', foregroundColor)
        .attr('d', this.arc())
  }

  updatePercent(context){
    return this.setForeground(context).transition()
      .duration(this.props.duration)
      .call(this.arcTween, this.tau * this.props.percentComplete, this.arc())
  }

  arcTween(transition, newAngle, arc){
    transition.attrTween('d', d =>{
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc =d ;
      return t => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      }
    })
  }

  arc() {
    return d3.arc()
      .innerRadius(60)
      .outerRadius(70)
      .cornerRadius(5)
      .startAngle(0);
  }

  setContext() {
    var { id } = this.props
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '140px')
      .attr('width', '140px')
      .attr('id', id)
      .append('g')
      .attr('transform', `translate(70, 70)`)
  }
  render() {
    return (
      <span ref="arc"></span>
    )
  }
}