import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

export default class MainNav extends Component {

    render() {
        return (
            <div id="main-nav">
                <NavHashLink to="/#intro" smooth>
                    <svg id="logo-svg" width="140" height="24" viewBox="0 0 140 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="logo">
                        <path className="at-symbol"
                            d="M10.144 23.284C8.14668 23.284 6.40134 22.8734 4.90801 22.052C3.43334 21.2307 2.28534 20.092 1.46401 18.636C0.661343 17.1614 0.26001 15.444 0.26001 13.484C0.26001 11.804 0.549343 10.1987 1.12801 8.66802C1.72534 7.11869 2.57468 5.74669 3.67601 4.55202C4.79601 3.33869 6.13068 2.38669 7.68001 1.69602C9.24801 0.986686 10.9933 0.632019 12.916 0.632019C14.9507 0.632019 16.668 1.03335 18.068 1.83602C19.468 2.63868 20.532 3.72135 21.26 5.08402C21.988 6.44669 22.352 7.97735 22.352 9.67602C22.352 10.908 22.1653 12.028 21.792 13.036C21.4187 14.0254 20.924 14.884 20.308 15.612C19.692 16.3214 19.0013 16.872 18.236 17.264C17.4707 17.656 16.696 17.852 15.912 17.852C14.9227 17.852 14.1667 17.5814 13.644 17.04C13.1213 16.4987 12.8133 15.8734 12.72 15.164C12.16 16.0787 11.5347 16.76 10.844 17.208C10.172 17.6374 9.48134 17.852 8.77201 17.852C7.91334 17.852 7.15734 17.5254 6.50401 16.872C5.86934 16.2187 5.55201 15.22 5.55201 13.876C5.55201 12.8867 5.74801 11.9067 6.14001 10.936C6.55068 9.94669 7.08268 9.05069 7.73601 8.24802C8.38934 7.42669 9.10801 6.77335 9.89201 6.28802C10.6947 5.78402 11.488 5.53202 12.272 5.53202C13.1307 5.53202 13.8773 5.79335 14.512 6.31602L16.304 5.70002L17.004 6.17602L15.324 15.5C15.2307 16.0414 15.2773 16.4707 15.464 16.788C15.6693 17.0867 15.9493 17.236 16.304 17.236C16.9573 17.236 17.6013 16.9187 18.236 16.284C18.8707 15.6307 19.4027 14.7347 19.832 13.596C20.2613 12.4387 20.476 11.104 20.476 9.59202C20.476 6.96002 19.7853 4.91602 18.404 3.46002C17.0413 1.98535 15.184 1.24802 12.832 1.24802C11.2267 1.24802 9.78001 1.57469 8.49201 2.22802C7.20401 2.88135 6.09334 3.76802 5.16001 4.88802C4.24534 6.00802 3.54534 7.27735 3.06001 8.69602C2.57468 10.1147 2.33201 11.5894 2.33201 13.12C2.33201 15.1547 2.70534 16.8627 3.45201 18.244C4.19868 19.6254 5.22534 20.6707 6.53201 21.38C7.85734 22.108 9.36001 22.472 11.04 22.472C11.8053 22.472 12.552 22.3974 13.28 22.248C14.008 22.0987 14.7173 21.8747 15.408 21.576L15.576 22.08C14.7733 22.4534 13.9053 22.7427 12.972 22.948C12.0573 23.172 11.1147 23.284 10.144 23.284ZM10.368 15.864C10.6853 15.864 11.012 15.7894 11.348 15.64C11.684 15.472 12.0387 15.1827 12.412 14.772L13.812 7.07202C13.6253 6.82935 13.4013 6.66135 13.14 6.56802C12.8787 6.47469 12.6173 6.42802 12.356 6.42802C11.8333 6.42802 11.2827 6.71735 10.704 7.29602C10.144 7.87469 9.65868 8.65869 9.24801 9.64802C8.85601 10.6374 8.66001 11.748 8.66001 12.98C8.66001 13.9507 8.82801 14.6787 9.16401 15.164C9.50001 15.6307 9.90134 15.864 10.368 15.864Z"
                            fill="black" />
                        <path
                            d="M30.8347 19.42C29.64 19.42 28.7067 19.1214 28.0347 18.524C27.3814 17.9267 27.0547 16.9747 27.0547 15.668V6.09202H25.1227V5.81202L25.7947 5.70002C26.3734 5.56935 26.868 5.38269 27.2787 5.14002C27.708 4.89735 28.128 4.57069 28.5387 4.16002L30.8347 1.61202H31.1147L31.0307 5.53202H34.1667V6.09202H31.0027V16.172C31.0027 16.8254 31.1427 17.32 31.4227 17.656C31.7214 17.992 32.0947 18.16 32.5427 18.16C32.9347 18.16 33.28 18.0667 33.5787 17.88C33.8774 17.6747 34.176 17.404 34.4747 17.068L34.7547 17.348C34.3814 17.9827 33.868 18.4867 33.2147 18.86C32.5614 19.2334 31.768 19.42 30.8347 19.42Z"
                            fill="black" />
                        <path
                            d="M37.0319 19V18.72L37.4239 18.608C37.7786 18.5147 38.0212 18.356 38.1519 18.132C38.3012 17.908 38.3852 17.6094 38.4039 17.236V8.47202C38.4039 8.06135 38.3386 7.76269 38.2079 7.57602C38.0772 7.37069 37.8252 7.23069 37.4519 7.15602L37.0319 7.04402V6.76402L41.8199 5.14002L42.0999 5.42002L42.3239 7.32402C42.9399 6.70802 43.6399 6.18535 44.4239 5.75602C45.2266 5.32669 46.0572 5.11202 46.9159 5.11202C47.8119 5.11202 48.5306 5.29869 49.0719 5.67202C49.6132 6.02669 50.0239 6.58669 50.3039 7.35202C51.0319 6.66135 51.8159 6.12002 52.6559 5.72802C53.5146 5.31735 54.3452 5.11202 55.1479 5.11202C56.4732 5.11202 57.4439 5.42935 58.0599 6.06402C58.6946 6.69869 59.0119 7.69735 59.0119 9.06002V17.264C59.0119 17.992 59.3479 18.4494 60.0199 18.636L60.3279 18.72V19H53.8599V18.72L54.1399 18.636C54.4946 18.524 54.7372 18.356 54.8679 18.132C55.0172 17.908 55.0919 17.6094 55.0919 17.236V8.66802C55.0919 7.88402 54.9519 7.35202 54.6719 7.07202C54.3919 6.77335 53.9439 6.62402 53.3279 6.62402C52.8426 6.62402 52.3666 6.73602 51.8999 6.96002C51.4519 7.16535 50.9759 7.48269 50.4719 7.91202C50.5652 8.21069 50.6212 8.53735 50.6399 8.89202C50.6772 9.24669 50.6959 9.62002 50.6959 10.012V17.264C50.7146 17.992 51.0506 18.4494 51.7039 18.636L51.9559 18.72V19H45.4599V18.72L45.8519 18.608C46.2065 18.496 46.4492 18.3374 46.5799 18.132C46.7292 17.908 46.8039 17.6094 46.8039 17.236V8.69602C46.8039 7.94935 46.6639 7.41735 46.3839 7.10002C46.1226 6.78269 45.6652 6.62402 45.0119 6.62402C44.5825 6.62402 44.1532 6.73602 43.7239 6.96002C43.2946 7.16535 42.8465 7.47335 42.3799 7.88402V17.264C42.3799 17.992 42.7065 18.4494 43.3599 18.636L43.6119 18.72V19H37.0319Z"
                            fill="black" />
                        <path
                            d="M67.7538 19.42C67.0258 19.42 66.3538 19.28 65.7378 19C65.1405 18.72 64.6645 18.272 64.3098 17.656C63.9738 17.0214 63.8151 16.1907 63.8338 15.164L63.9178 7.96802C63.9178 7.53869 63.8431 7.23069 63.6938 7.04402C63.5445 6.85735 63.3111 6.72669 62.9938 6.65202L62.6578 6.54002V6.26002L67.6698 5.28002L67.9498 5.56002L67.8098 9.53602V16.284C67.8098 16.8814 67.9778 17.32 68.3138 17.6C68.6685 17.88 69.1071 18.02 69.6298 18.02C70.1525 18.02 70.6191 17.9454 71.0298 17.796C71.4405 17.6467 71.8511 17.4227 72.2618 17.124L72.3738 7.99602C72.3738 7.56669 72.3085 7.26802 72.1778 7.10002C72.0471 6.91335 71.8045 6.78269 71.4498 6.70802L71.1698 6.62402V6.34402L76.0698 5.28002L76.3498 5.56002L76.2658 9.53602V17.124C76.2658 17.5347 76.3218 17.852 76.4338 18.076C76.5458 18.3 76.7885 18.4867 77.1618 18.636L77.4418 18.72V19L72.5418 19.28L72.2898 17.628C71.6738 18.132 71.0018 18.5614 70.2738 18.916C69.5645 19.252 68.7245 19.42 67.7538 19.42Z"
                            fill="black" />
                        <path
                            d="M79.9725 19V18.72L80.3645 18.608C81.0178 18.4214 81.3445 17.964 81.3445 17.236V8.47202C81.3445 8.06135 81.2792 7.76269 81.1485 7.57602C81.0178 7.37069 80.7658 7.23069 80.3925 7.15602L79.9725 7.04402V6.76402L84.7605 5.14002L85.0405 5.42002L85.2645 7.10002C85.9178 6.52135 86.6552 6.04535 87.4765 5.67202C88.2978 5.29869 89.1098 5.11202 89.9125 5.11202C91.1445 5.11202 92.0872 5.44802 92.7405 6.12002C93.4125 6.79202 93.7485 7.81869 93.7485 9.20002V17.264C93.7485 17.992 94.1032 18.4494 94.8125 18.636L95.0645 18.72V19H88.4565V18.72L88.8205 18.608C89.4738 18.4027 89.8005 17.9454 89.8005 17.236V8.30402C89.8005 7.10935 89.2032 6.51202 88.0085 6.51202C87.1872 6.51202 86.2912 6.92269 85.3205 7.74402V17.264C85.3205 17.992 85.6472 18.4494 86.3005 18.636L86.5525 18.72V19H79.9725Z"
                            fill="black" />
                        <path
                            d="M97.644 19V18.552L105.288 6.09202H101.06C100.575 6.09202 100.192 6.22269 99.912 6.48402C99.632 6.74535 99.3707 7.09069 99.128 7.52002L98.12 9.39602H97.84L98.036 5.53202H109.236V5.92402L101.76 18.44H106.156C106.753 18.44 107.192 18.3 107.472 18.02C107.752 17.74 108.013 17.3574 108.256 16.872L109.236 14.8H109.516L109.264 19H97.644Z"
                            fill="black" />
                        <path
                            d="M116.064 19.42C114.981 19.42 114.066 19.112 113.32 18.496C112.592 17.88 112.228 16.9934 112.228 15.836C112.228 14.9587 112.676 14.156 113.572 13.428C114.468 12.6814 115.877 12.1214 117.8 11.748C118.098 11.692 118.434 11.636 118.808 11.58C119.181 11.5054 119.573 11.4307 119.984 11.356V9.14402C119.984 7.87469 119.825 6.98802 119.508 6.48402C119.209 5.96135 118.733 5.70002 118.08 5.70002C117.632 5.70002 117.277 5.84935 117.016 6.14802C116.754 6.42802 116.586 6.92269 116.512 7.63202L116.456 7.94002C116.418 8.74269 116.222 9.33069 115.868 9.70402C115.513 10.0774 115.074 10.264 114.552 10.264C114.066 10.264 113.665 10.1147 113.348 9.81602C113.03 9.51735 112.872 9.11602 112.872 8.61202C112.872 7.84669 113.133 7.20269 113.656 6.68002C114.197 6.15735 114.906 5.76535 115.784 5.50402C116.661 5.24269 117.613 5.11202 118.64 5.11202C120.301 5.11202 121.58 5.52269 122.476 6.34402C123.39 7.14669 123.848 8.46269 123.848 10.292V16.48C123.848 17.32 124.24 17.74 125.024 17.74H125.64L125.892 17.964C125.537 18.412 125.145 18.7574 124.716 19C124.305 19.2427 123.717 19.364 122.952 19.364C122.13 19.364 121.477 19.1774 120.992 18.804C120.525 18.412 120.217 17.8987 120.068 17.264C119.508 17.8614 118.929 18.3747 118.332 18.804C117.753 19.2147 116.997 19.42 116.064 19.42ZM117.772 17.712C118.145 17.712 118.49 17.628 118.808 17.46C119.144 17.2734 119.536 16.9934 119.984 16.62V11.916C119.797 11.9534 119.61 11.9907 119.424 12.028C119.237 12.0654 119.022 12.1027 118.78 12.14C117.921 12.364 117.23 12.7467 116.708 13.288C116.204 13.8107 115.952 14.52 115.952 15.416C115.952 16.1814 116.129 16.76 116.484 17.152C116.838 17.5254 117.268 17.712 117.772 17.712Z"
                            fill="black" />
                        <path
                            d="M127.813 19V18.72L128.233 18.608C128.606 18.496 128.858 18.328 128.989 18.104C129.138 17.88 129.213 17.5907 129.213 17.236V8.47202C129.213 8.06135 129.138 7.76269 128.989 7.57602C128.858 7.37069 128.606 7.23069 128.233 7.15602L127.813 7.04402V6.76402L132.629 5.14002L132.909 5.42002L133.161 7.82802V8.05202C133.422 7.52935 133.758 7.05335 134.169 6.62402C134.598 6.17602 135.065 5.81202 135.569 5.53202C136.092 5.25202 136.605 5.11202 137.109 5.11202C137.818 5.11202 138.36 5.30802 138.733 5.70002C139.106 6.09202 139.293 6.58669 139.293 7.18402C139.293 7.81869 139.106 8.31335 138.733 8.66802C138.378 9.00402 137.949 9.17202 137.445 9.17202C136.661 9.17202 135.97 8.78002 135.373 7.99602L135.317 7.94002C135.13 7.67869 134.916 7.53869 134.673 7.52002C134.43 7.48269 134.206 7.59469 134.001 7.85602C133.814 8.02402 133.656 8.22935 133.525 8.47202C133.413 8.69602 133.301 8.95735 133.189 9.25602V17.068C133.189 17.8147 133.516 18.2814 134.169 18.468L135.065 18.72V19H127.813Z"
                            fill="black" />
                    </svg>
                </NavHashLink>
                <nav>
                    <NavHashLink to="/#case-studies" exact smooth>Work</NavHashLink>
                    <NavLink to="/about" exact>About</NavLink>
                    <a href="https://www.linkedin.com/in/tmunzar/" target="_blank" rel="noopener noreferrer" className="hide-for-mobile">LinkedIn</a>
                    <a href="mailto:tmunzar@gmail.com" className="hide-for-mobile">Email</a>
                    <NavHashLink to="#footer" smooth className="show-only-for-mobile" activeClassName="">Contact</NavHashLink>
                </nav>
            </div>
        )
    }
}