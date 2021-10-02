import React, { Component } from 'react'
class FooterComponent extends Component {
    constructor(props) {
        super(props)
	this.state = {        }
    }
    render() {
        return (
            <div>
              
                <footer class="bg-dark text-center text-white">

                    <div class="container">
                        <div class="text-center p-3" style={{ backgroundcolor: 'rgba(0, 0, 0, 0.2)'}}>
                            © 2020 Copyright:
                            <a class="text-white"> Know Your Neighbourhood </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default FooterComponent