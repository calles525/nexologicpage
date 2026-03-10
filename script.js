// 1. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// 2. Mouse Glow Effect for Cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 3. Scroll Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealOnScroll.observe(el));

// 4. Form Submission Handling (Updated with Toast)
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");



contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    console.log("Formulario enviado");

    const btn = contactForm.querySelector("button");
    const originalText = btn.innerText;

    btn.innerText = "Transmitiendo...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    try {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Por favor completa los campos obligatorios");
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
            return;
        }

        const supportMessage = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
    margin:0;
    padding:0;
    background:#0f172a;
    font-family:Arial, Helvetica, sans-serif;
}

.container{
    max-width:650px;
    margin:40px auto;
    background:#111827;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 40px rgba(0,0,0,0.6);
    border:1px solid #1f2937;
}

.header{
    background:linear-gradient(135deg,#06b6d4,#6366f1);
    padding:25px;
    text-align:center;
    color:white;
}

.header h1{
    margin:0;
    font-size:26px;
    letter-spacing:2px;
}

.header p{
    margin:5px 0 0 0;
    opacity:0.9;
}

.section{
    padding:25px;
    color:#e5e7eb;
}

.section-title{
    font-size:14px;
    text-transform:uppercase;
    letter-spacing:2px;
    color:#06b6d4;
    margin-bottom:15px;
    border-bottom:1px solid #1f2937;
    padding-bottom:8px;
}

.info{
    margin-bottom:10px;
    font-size:14px;
}

.label{
    color:#9ca3af;
    font-weight:bold;
}

.message-box{
    background:#020617;
    border:1px solid #1f2937;
    padding:15px;
    border-radius:8px;
    line-height:1.6;
    color:#d1d5db;
    white-space:pre-line;
}

.footer{
    text-align:center;
    padding:15px;
    font-size:12px;
    color:#6b7280;
    border-top:1px solid #1f2937;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h1>NEXO LOGIC</h1>
<p>Nuevo contacto desde la web</p>
</div>

<div class="section">
<div class="section-title">Información del Cliente</div>

<div class="info"><span class="label">Nombre:</span> ${name}</div>
<div class="info"><span class="label">Email:</span> ${email}</div>
<div class="info"><span class="label">Teléfono:</span> ${phone || 'No especificado'}</div>
<div class="info"><span class="label">Servicio:</span> ${service}</div>
</div>

<div class="section">
<div class="section-title">Mensaje del Cliente</div>

<div class="message-box">
${message}
</div>
</div>

<div class="footer">
© 2026 Nexo Logic<br>
nexologic.netlify.app
</div>

</div>

</body>
</html>
`;

        const clientMessage = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>

body{
    margin:0;
    padding:0;
    background:#0f172a;
    font-family:Arial, Helvetica, sans-serif;
}

.container{
    max-width:650px;
    margin:40px auto;
    background:#111827;
    border-radius:12px;
    overflow:hidden;
    border:1px solid #1f2937;
    box-shadow:0 10px 40px rgba(0,0,0,0.6);
}

.header{
    text-align:center;
    background:#020617;
    padding:25px;
}

.logo{
    width:160px;
}

.hero{
    width:100%;
    height:220px;
    object-fit:cover;
}

.content{
    padding:30px;
    color:#e5e7eb;
    line-height:1.6;
    font-size:15px;
}

.highlight{
    color:#22d3ee;
    font-weight:bold;
}

.box{
    margin-top:20px;
    padding:18px;
    background:#020617;
    border:1px solid #1f2937;
    border-radius:8px;
}

.button{
    display:inline-block;
    margin-top:25px;
    padding:14px 26px;
    background:linear-gradient(135deg,#06b6d4,#6366f1);
    color:white;
    text-decoration:none;
    border-radius:8px;
    font-weight:bold;
}

.social{
    text-align:center;
    margin-top:25px;
}

.social img{
    width:32px;
    margin:0 8px;
}

.footer{
    text-align:center;
    padding:20px;
    font-size:12px;
    color:#6b7280;
    border-top:1px solid #1f2937;
}

</style>
</head>

<body>

<div class="container">

<div class="header">
<img class="logo" src="https://nexologic.netlify.app/Agenda(5).png">
</div>

<img class="hero" src="https://images.unsplash.com/photo-1518770660439-4636190af475">

<div class="content">

<h2>Bienvenido a Nexo Logic 🚀</h2>

<p>
Hola <span class="highlight">${name}</span>,
</p>

<p>
Gracias por contactar con <strong>Nexo Logic</strong>.  
Hemos recibido tu solicitud correctamente y un miembro de nuestro equipo
se comunicará contigo en las próximas <strong>24 horas</strong> para analizar
tu proyecto y ofrecerte la mejor solución tecnológica.
</p>

<div class="box">
<b>¿Qué pasará ahora?</b><br><br>

✔ Revisaremos tu solicitud<br>
✔ Analizaremos tu proyecto<br>
✔ Te enviaremos una propuesta personalizada
</div>

<center>
<a class="button" href="https://nexologic.netlify.app/">
Visitar nuestro sitio web
</a>
</center>

<div class="social">

<a href="#">
<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png">
</a>

<a href="#">
<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png">
</a>

</div>

</div>

<div class="footer">
© 2026 Nexo Logic<br>
Conectando Ideas en un Mundo Digital
</div>

</div>

</body>
</html>
`;
        // correo al cliente
        const res1 = await fetch("https://marketgo.website/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                message: clientMessage
            })
        });

        if (!res1.ok) {
            throw new Error("Error enviando correo al cliente");
        }

        // correo a soporte
        const res2 = await fetch("https://marketgo.website/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "nexologic.soporte@gmail.com",
                message: supportMessage
            })
        });

        if (!res2.ok) {
            throw new Error("Error enviando correo a soporte");
        }

        console.log("Correos enviados correctamente");

        contactForm.reset();

        if (toast) {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        }

    } catch (error) {

        console.error(error);
        alert("Hubo un error enviando el mensaje. Intenta nuevamente.");

    }

    btn.innerText = originalText;
    btn.disabled = false;
    btn.style.opacity = "1";

});
// 5. --- GALLERY ACCORDION LOGIC (TUS PROYECTOS) ---
const slides = document.querySelectorAll(".slide-project");

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        removeActiveClasses();
        slide.classList.add("active");
    });
});

function removeActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
}