import React, { Component } from 'react';

class Navbar extends Component {
    render() {
      return (
        <div class="w3-top">
            <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
                <i class="fa fa-bars"></i>
            </a>
            <a href="#home" class="w3-bar-item w3-button">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
            <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i class="fa fa-search"></i>
            </a>
            </div>

            {/* <!-- Navbar on small screens --> */}
            <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
                <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
                <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
                <a href="#" class="w3-bar-item w3-button">SEARCH</a>
            </div>

            {/* <!-- First Parallax Image with Logo Text --> */}
            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div class="w3-display-middle">
                    <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span class="w3-hide-small">WEBSITE</span> PORTFOLIO</span>
                </div>
                <img src="https://lh3.googleusercontent.com/FY5ITsF9nMFPO7CfLPNQV7JvIvslAVt6pcaU7kRT1irxkvbXeFALs8icy9t-7OJhzBs8inSTuCX7pSO8LV4I0lODBNBzbyOrVmT5YPKVck8YLfk-44US-3Dq85O3huW7E0f_PAgeeuIjB-7oj9cVbWgwXLp4OadPqEU-P2_GAS5amHa54ztnk5u981NjerTSNlcGCgIvHx9lcNclNnYv9D3ncqdES2g898PsN8qcIzBiucaNeMbOLq7jyPTSMQFW3jHyCbT9PkISdr2oJDPolVfCWY0psORLLPpYsp8ms6V1KQjigxVwSchZmjKsj09An39gRsv1p0_FVZhK0xnkM0oq9CjSTT1Eo0NjdO8yppT4B_meiT-Z0XHILpslppwqPao2n7681-mz6TLs58-6Ym9SZYM3T8QdPjyMxQSh1XI54auhwIIMAxNP6egA9l5d65fAtRyN2ffQoUydcAJEo_ARXU7xwuwZOfTBKwjDNsQqwxPxmtFV3AWHbtthFiP3PDAsFQDZvg3pVFhIaA8ANqpgKtGdvVK7EfiK1xJyKsiBnalYL2FQyV_SztHQWNqjb_t_7IyjCSehEB7E5B5FFGGLKH0WQuck9jj4fk1agHkq9sv_3C237ApM8PeQc-s=w904-h678-no" alt="intropic"/>
            </div>
        </div>
    );
}
}

export default Navbar;
