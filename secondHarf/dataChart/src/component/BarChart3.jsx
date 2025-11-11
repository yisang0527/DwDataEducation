// BarChart3.jsx

import "chart.js/auto"
import { Bar } from "react-chartjs-2";

export default function BarChart3() {
    // 요일별 디바이스별 페이지 방문량
    const visit = [
        { week: "월요일", pc: 54, mobile: 19, tablets: 45 },
        { week: "화요일", pc: 52, mobile: 34, tablets: 85 },
        { week: "수요일", pc: 47, mobile: 82, tablets: 43 },
        { week: "목요일", pc: 29, mobile: 93, tablets: 108 },
        { week: "금요일", pc: 30, mobile: 26, tablets: 46 },
        { week: "토요일", pc: 82, mobile: 74, tablets: 72 },
        { week: "일요일", pc: 15, mobile: 65, tablets: 33 }
    ];

    const [week, pc, mobile, tablets] = [
        visit.map((d) => d.week),
        visit.map((d) => d.pc),
        visit.map((d) => d.mobile),
        visit.map((d) => d.tablets)
    ];

    const data = {
        labels: week,
        datasets: [
            {
                label: "PC",
                data: pc
            },

            {
                label: "모바일",
                data: mobile
            },

            {
                label: "태블릿",
                data: tablets
            }
        ]
    };

    const options = {
        scales: {
            x: {
                stacked: true
            },

            y: {
                stacked: true
            }
        }
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
}