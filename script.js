const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT2PPMP-2cRZp1FA6rRGonJVa_I_otlgeqJF1dPD84fm6wq43USi06t8Y2b2gjo2Hjt6Jx8fE0yWz3l/pub?gid=0&single=true&output=csv';

function loadTeamData() {
    Papa.parse(csvUrl, {
        download: true,
        header: true, // 첫 줄을 헤더로 인식
        complete: function(results) {
            const container = document.getElementById('team-list');
            container.innerHTML = '';
            
            results.data.forEach(team => {
                if (!team.팀명) return; // 데이터 없는 행 제외

                const div = document.createElement('div');
                div.className = 'team-card';
                div.innerHTML = `
                    <img src="${team.로고이미지URL}" alt="${team.팀명}">
                    <h3>${team.팀명}</h3>
                    <p>${team.리그} | ${team.지역}</p>
                    <p><small>${team.특징}</small></p>
                `;
                container.appendChild(div);
            });
        }
    });
}

loadTeamData();