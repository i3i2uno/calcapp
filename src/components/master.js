import React, { Component } from 'react'
import 'style/index.scss'

import PresentValue from 'components/presentvalue'
import Buttons from 'components/buttons'

export default class Master extends Component {
    constructor(props) {
        super(props);
        const actions = this.actions.call(this);

        this.state = {
            currentValue: 0,
            valueDisplay: 0,
            buttons: [
                { val: 'AC', className: 'extra', onClick: actions.clear },
                { val: '%', className: 'extra', onClick: actions.percent },
                { val: '\u221A', className: 'extra', onClick: actions.sqrt },
                { val: '/', className: 'operator' },
                { val: 7, className: 'num' },
                { val: 8, className: 'num' },
                { val: 9, className: 'num' },
                { val: '*', className: 'operator' },
                { val: 4, className: 'num' },
                { val: 5, className: 'num' },
                { val: 6, className: 'num' },
                { val: '-', className: 'operator' },
                { val: 1, className: 'num' },
                { val: 2, className: 'num' },
                { val: 3, className: 'num' },
                { val: '+', className: 'operator' },
                { val: 0, className: 'width_2 num' },
                { val: '.', className: 'num' },
                { val: '=', className: 'operator', onClick: actions.calculate },
            ]
        }
    }
    actions() {
        const self = this;
        return {
            pressBtn(b) {
                b = b || null;
                let val = b.val;

                let valueDisplay = self.state.valueDisplay === 0 ? '' : self.state.valueDisplay.toString();

                if(val !== undefined) {
                    if(typeof val === 'string' && valueDisplay === '') {
                        valueDisplay += (self.state.currentValue || 0).toString();
                    }

                    valueDisplay += typeof val === 'string' && val !== '.' ? ' ' + val + ' ' : val;

                    self.setState({ valueDisplay })
                }
            },
            percent() {
                if(self.state.currentValue) {
                    self.state.currentValue = self.state.currentValue / 100;
                    self.setState(self.state)
                }
            },
            calculate(cb) {
                let currentValue = eval(self.state.valueDisplay);
                let valueDisplay = 0;
                self.setState({ currentValue, valueDisplay }, typeof cb === 'function' ? cb : null)
            },
            clear() {
                let currentValue = 0;
                let valueDisplay = 0;
                self.setState({ currentValue, valueDisplay })
            },
            sqrt() {
                if(self.state.valueDisplay) {
                    self.actions.call(self).calculate(calc);
                } else {
                    calc();
                }

                function calc() {
                    let currentValue = Math.sqrt(self.state.currentValue);
                    self.setState({ currentValue });
                }
                
            },
            notImplemented() {
                alert('Sorry this button has not been implemented. Please hire Bruce Richardson to add additional features.')
            }
        }
    }
    componentDidMount() {
        document.onkeydown = (evt) => {
            evt = evt || window.event;
            if (evt.keyCode == 8) {
                if(this.state.valueDisplay) {
                    this.state.valueDisplay = this.state.valueDisplay.length === 1 ? 0 : this.state.valueDisplay.substring(0, this.state.valueDisplay.length - 1);
                    this.setState(this.state)
                }
            }
        };
    }
    render() {
        const state = this.state;
        const actions = this.actions.call(this);
        
        return (
            <div className="masterContainer">
                
                <PresentValue {...state} actions={actions} />
                <Buttons {...state} actions={actions} />

            </div>
        )
    }
}