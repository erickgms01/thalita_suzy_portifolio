document.addEventListener('DOMContentLoaded', () => {
    
    const translations = {
        "pt": {
            // Navbar
            "nav_home": "Home", "nav_about": "Sobre", "nav_projects": "Projetos", "nav_lang": "Idioma",
            // Hero
            "hero_title": "Portfólio", 
            "hero_subtitle": "Este portfólio reúne alguns de meus projetos que utilizam conceitos de <strong>Graphic Design, UI/UX, Social Media e Software Development.</strong> Um compilado de projetos onde o código encontra a forma para resolver problemas reais.", 
            "hero_presented": "Apresentado por: Thalita Suzy", 
            "hero_btn": "Projetos",
            // Interests
            "int_ihc": "Interação Humano-Computador", "int_cs": "Comunicação Social",
            // Sobre
            "about_section_title": "Quem é<br><em>Thalita Suzy</em>", 
            "about_title": "Sobre mim", 
            "about_text": "Desde pequena, com uma mãe pedagoga e um pai contador de histórias, eu passava horas lendo, escrevendo, recortando, desenhando, pintando e me aventurando nos desafios que eu encontrava ou que colocava no meu caminho. Aos 14 anos, entrei para o curso técnico integrado ao médio de Informática no Instituto Federal do Ceará (IFCE) e <strong>descobri algo muito interessante: transformar ideias em realidade não acontece apenas no mundo físico, mas também no digital.</strong> Foi assim que percebi que a comunicação visual é tão essencial quanto as linhas de código, entendendo a computação como uma ciência que não pertence apenas ao campo das exatas, mas também das humanas - é preciso entender o porquê, o para quê e para quem um projeto é feito.", 
            "about_cv": "Curriculum Vitae",
            // Projetos
            "proj_tag": "— Projetos", 
            "proj_title": "Últimos <span>Projetos</span>", 
            "proj_view_all": "Ver todos os posts <span class=\"arrow\">→</span>", 
            "proj_read_more": "Ler Mais",
            "proj1_desc": "O Menutech é um aplicativo que visa revolucionar a experiência do refeitório acadêmico, atendendo as demandas de toda a comunidade acadêmica, desde os alunos até a equipe administrativa.",
            "proj2_desc": "O HelpMeMo é uma plataforma gameficada de cunho educacional, onde a proposta se constrói na interação com Jogos da Memória e Tabela de Frequência, diretamente relacionados ao aprendizado das disciplinas de matemática, sociologia e Segurança e Higiene do Trabalho (HST).",
            // Social Media
            "sm_desc": "Ao longo da minha jornada, o meu interesse não ficou apenas no desenvolvimento ou design de interfaces, mas se estendeu para outros nichos do design gráfico, incluindo a comunicação. Aqui você pode encontrar alguns dos meus trabalhos.", 
            "sm_btn": "Ver conteúdos",
            // Acadêmico
            "acad_title": "Formação<br>Acadêmica", 
            "acad_ifce_title": "TÉCNICO EM INFORMÁTICA - IFCE", 
            "acad_ifce_desc": "Formação técnica com foco em programação, desenvolvimento de software, web, mobile e metodologias ágeis. Experiência em projetos práticos e aplicação de tecnologias no mercado.",
            "acad_ufc_date": "2025 - ATUAL", 
            "acad_ufc_title": "SISTEMAS E MÍDIAS DIGITAIS - UFC", 
            "acad_ufc_desc": "Bacharelado, atua no desenvolvimento de sistemas multimídia de forma diversificada: desde a área de sistemas tradicionais de computadores até jogos digitais. Interação entre programação de sistemas digitais e comunicação baseadas em recursos multimídia.",
            "acad_int_title": "Interesses", 
            "acad_int_dev": "Desenvolvimento de Software", 
            "acad_int_cog": "Cognição",
            // Footer
            "foot_connect": "Let’s <span>Connect</span> there", 
            "foot_btn": "Vamos conversar <span class=\"arrow\">→</span>", 
            "foot_desc": "Desenvolvedora Front-end e Designer Visual apaixonada por criar experiências digitais que conectam pessoas e propósitos.",
            "foot_nav": "Navegação", 
            "foot_contact": "Vamos Conectar", 
            "foot_rights": "Copyright © 2026 <span>Thalita Suzy</span>. Todos os direitos reservados."
        },
        "en": {
            // Navbar
            "nav_home": "Home", "nav_about": "About", "nav_projects": "Projects", "nav_lang": "Language",
            // Hero
            "hero_title": "Portfolio", 
            "hero_subtitle": "This portfolio gathers some of my projects that use concepts of <strong>Graphic Design, UI/UX, Social Media and Software Development.</strong> A compilation of projects where code meets form to solve real problems.", 
            "hero_presented": "Presented by: Thalita Suzy", 
            "hero_btn": "Projects",
            // Interests
            "int_ihc": "Human-Computer Interaction", "int_cs": "Social Communication",
            // Sobre
            "about_section_title": "Who is<br><em>Thalita Suzy</em>", 
            "about_title": "About me", 
            "about_text": "Since I was a little girl, with a pedagogue mother and a storyteller father, I spent hours reading, writing, cutting, drawing, painting, and venturing into the challenges I found or placed in my path. At 14, I enrolled in the integrated technical high school course in Informatics at the Federal Institute of Ceará (IFCE) and <strong>discovered something very interesting: transforming ideas into reality doesn't only happen in the physical world, but also in the digital one.</strong> That's how I realized visual communication is as essential as lines of code, understanding computing as a science that belongs not only to exact sciences but also to humanities - you need to understand the why, what for, and for whom a project is made.", 
            "about_cv": "Resume / CV",
            // Projetos
            "proj_tag": "— Projects", 
            "proj_title": "Latest <span>Projects</span>", 
            "proj_view_all": "View all posts <span class=\"arrow\">→</span>", 
            "proj_read_more": "Read More",
            "proj1_desc": "Menutech is an application that aims to revolutionize the academic cafeteria experience, meeting the demands of the entire academic community, from students to the administrative team.",
            "proj2_desc": "HelpMeMo is a gamified educational platform built around the interaction with Memory Games and Frequency Tables, directly related to learning mathematics, sociology, and Occupational Health and Safety (OHS).",
            // Social Media
            "sm_desc": "Throughout my journey, my interest hasn't remained solely in software development or interface design, but has extended to other niches of graphic design, including communication. Here you can find some of my work.", 
            "sm_btn": "View content",
            // Acadêmico
            "acad_title": "Academic<br>Background", 
            "acad_ifce_title": "IT TECHNICIAN - IFCE", 
            "acad_ifce_desc": "Technical education focused on programming, software development, web, mobile, and agile methodologies. Experience in practical projects and applying technologies in the market.",
            "acad_ufc_date": "2025 - PRESENT", 
            "acad_ufc_title": "DIGITAL SYSTEMS AND MEDIA - UFC", 
            "acad_ufc_desc": "Bachelor's degree, working in the development of multimedia systems in a diversified way: from traditional computer systems to digital games. Interaction between digital systems programming and communication based on multimedia resources.",
            "acad_int_title": "Interests", 
            "acad_int_dev": "Software Development", 
            "acad_int_cog": "Cognition",
            // Footer
            "foot_connect": "Let’s <span>Connect</span> there", 
            "foot_btn": "Let's talk <span class=\"arrow\">→</span>", 
            "foot_desc": "Front-end Developer and Visual Designer passionate about creating digital experiences that connect people and purposes.",
            "foot_nav": "Navigation", 
            "foot_contact": "Contact", 
            "foot_rights": "Copyright © 2026 <span>Thalita Suzy</span>. All rights reserved."
        }
    };

    function setLanguage(language) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        localStorage.setItem('portfolio_lang', language);
    }

    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    const savedLang = localStorage.getItem('portfolio_lang') || 'pt';
    
    setLanguage(savedLang);

    if(btnPt) btnPt.addEventListener('click', (e) => { e.preventDefault(); setLanguage('pt'); });
    if(btnEn) btnEn.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });


   
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (cards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 1; 

        function updateCarousel() {
            cards.forEach((card) => {
                card.classList.remove('active');
                const label = card.querySelector('.project-label');
                if(label) label.classList.remove('solid');
            });
            cards[currentIndex].classList.add('active');
            const activeLabel = cards[currentIndex].querySelector('.project-label');
            if(activeLabel) activeLabel.classList.add('solid');
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        });
    }
});