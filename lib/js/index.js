window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {

                document.querySelector(`nav li.toc-plan-sub li a[href="#${id}"]`).parentElement.classList.add('active');
                document.querySelector(`nav li.toc-plan-sub li a[href="#${id}"]`).classList.add('text-dark');
                document.querySelector(`nav li.toc-plan-sub li a[href="#${id}"] i`).classList.add('text-dark');

            } else {
                document.querySelector(`nav li.toc-plan-sub li a[href="#${id}"]`).parentElement.classList.remove('active');
                document.querySelector(`nav li.toc-plan-sub li a[href="#${id}"]`).classList.remove('text-dark');
                document.querySelector(`nav li.toc-plan-sub ul li a[href="#${id}"] i`).classList.remove('text-dark');

            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});


const btnTop = document.getElementById("btnTop");

const btnIcon = document.getElementById("btnIcon");


window.onscroll = function () { scrollMointor() };

function scrollMointor() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";        
        
    } else {
        btnTop.style.display = "none";        
    }
}


function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
gLogoIdx = 1;
function changeIcon()
{
    ++gLogoIdx;
    if (gLogoIdx == 5) gLogoIdx=1;
    document.getElementById("header_logo").src = `images/LOGO_00${gLogoIdx}.png`;
    
}

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })

navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})