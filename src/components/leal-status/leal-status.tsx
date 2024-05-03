import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'leal-status',
  styleUrl: 'leal-status.css',
  shadow: true,
})
export class LealStatus {
  /**
   * User status
   */
  @Prop() status: boolean;

  render() {
    return <div style={this.status ? { backgroundColor: '#81C784' } : { backgroundColor: '#E57373' }}></div>;
  }
}
