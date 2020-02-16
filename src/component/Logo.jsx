import React from 'react'

const Logo = props => {
    return (

        <svg fill="none"
             height={213}

             width={213}
        style={{
            transform: `scalce(${props.status === 'main' ? 1 : 0.5 })`
        }}>
            <circle cx={106.5} cy={106.5} r={106.5} fill="#285065"/>
            <path
                d="M164.771 123.748h-7.298v7.298h7.298v-7.298z"
                fill="url(#prefix__paint0_linear)"
            />
            <path
                d="M164.771 109.152h-7.298v7.298h7.298v-7.298z"
                fill="url(#prefix__paint1_linear)"
            />
            <path
                d="M124.631 58.028L88.14 50.73 48 58.758v102.32l40.14-8.028 36.491 7.298 40.14-8.028v-13.976h-7.298v7.992l-29.193 5.838V64.742l29.193-5.838v42.949h7.298V50l-40.14 8.028zm-40.14 88.308l-29.193 5.838V64.742l29.193-5.838v87.432zm36.491 5.838l-29.193-5.838V58.904l29.193 5.838v87.432z"
                fill="url(#prefix__paint2_linear)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={154.244}
                    y1={123.334}
                    x2={171.163}
                    y2={126.118}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5BAC0B"/>
                    <stop offset={1} stopColor="#00B5EE"/>
                </linearGradient>
                <linearGradient
                    id="prefix__paint1_linear"
                    x1={154.244}
                    y1={108.738}
                    x2={171.163}
                    y2={111.521}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5BAC0B"/>
                    <stop offset={1} stopColor="#00B5EE"/>
                </linearGradient>
                <linearGradient
                    id="prefix__paint2_linear"
                    x1={-3.655}
                    y1={43.706}
                    x2={266.303}
                    y2={90.392}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5BAC0B"/>
                    <stop offset={1} stopColor="#00B5EE"/>
                </linearGradient>
            </defs>
        </svg>
    );

}

export default Logo;
