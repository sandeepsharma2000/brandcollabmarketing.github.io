document.addEventListener("DOMContentLoaded", (event) => {
    // SIDEBAR JS START
    const etSidebar = document.querySelector(".jo-sidebar");
    const etSidebarOpenBtn = document.querySelector(
        ".jo-header-sidebar-open-btn"
    );
    const etSidebarCloseBtn = document.querySelector(".jo-sidebar-close-btn");
    // const etMobileMenuOpenBtn = document.querySelector(".jo-mobile-menu-open-btn");
    const etMobileMenuContent = document.querySelector(
        ".to-go-to-sidebar-in-mobile"
    );
    const etMobileMenuContainer = document.querySelector(
        ".jo-header-nav-in-mobile"
    );
    const etHeaderNav = document.querySelectorAll(".jo-header-nav nav > *");
    const etHeaderNavContainer = document.querySelector(".jo-header-nav");

    if (window.innerWidth < 992) {
        etMobileMenuContainer.appendChild(etMobileMenuContent);
        etHeaderNav.forEach((etHeaderNavItem) => {
            etHeaderNavItem.addEventListener("click", () => {
                etHeaderNavItem.classList.toggle("active");
            });
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
            etMobileMenuContainer.appendChild(etMobileMenuContent);
        } else if (window.innerWidth > 992) {
            etHeaderNavContainer.appendChild(etMobileMenuContent);
        }
    });
    etSidebarOpenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        etSidebar.classList.add("active");
    });
    etSidebarCloseBtn.addEventListener("click", () => {
        etSidebar.classList.remove("active");
    });
    // MOBILE MENU SIDEBAR

    const reelPlayers = document.querySelectorAll(".jo-reel-video video");
    reelPlayers.forEach((player) => {
        new Plyr(player, {
            // controls: ['play-large', 'mute', 'captions', 'airplay', 'fullscreen'],
            controls: ["play-large"],
        });
    });

    new Swiper(".jo-reels-slider", {
        // slidesPerView: 5,
        // spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".jo-reels-slider-next",
            prevEl: ".jo-reels-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

    // tabs
    const tabButtons = document.querySelectorAll(".tab-nav");
    const tabs = document.querySelectorAll(".tt-tab");

    if (tabButtons) {
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                tabs.forEach((tab) => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                tabButtons.forEach((btn) => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    }

    // video slider
    if (document.querySelector(".jo-videos-slider")) {
        new Splide(".jo-videos-slider", {
            arrows: false,
            pagination: false,
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 2,
            autoWidth: true,
            gap: 30,
            autoScroll: {
                speed: 2,
            },
        }).mount(window.splide.Extensions);
    }
    if (document.querySelector(".jo-videos-slider-2")) {
        new Splide(".jo-videos-slider-2", {
            arrows: false,
            pagination: false,
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 2,
            autoWidth: true,
            gap: 30,
            autoScroll: {
                speed: -2,
            },
        }).mount(window.splide.Extensions);
    }

    new Swiper(".jo-partners-slider", {
        // slidesPerView: 4,
        // spaceBetween: 130,
        loop: true,
        pagination: {
            el: ".jo-partners-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
        },
    });

    new Swiper(".jo-related-services-slider", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        navigation: {
            prevEl: ".jo-related-services-slider-nav .prev",
            nextEl: ".jo-related-services-slider-nav .next",
        },
    });

    // inner videos slider
    new Swiper(".jo-inner-videos-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: ".jo-inner-videos-slider-nav .prev",
            nextEl: ".jo-inner-videos-slider-nav .next",
        },
        breakpoints: {
            0: {
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
            },
        },
    });

    new Swiper(".jo-related-videos-slider", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        navigation: {
            prevEl: ".jo-related-videos-slider-nav .prev",
            nextEl: ".jo-related-videos-slider-nav .next",
        },
    });

    // price filter
    var priceFilterSlider = document.getElementById(
        "jo-video-shop-price-filter-slider"
    );

    if (priceFilterSlider) {
        noUiSlider.create(priceFilterSlider, {
            start: [20, 80],
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });
    }

    if (document.querySelector("#jo-contact-subject")) {
        new SlimSelect({
            select: "#jo-contact-subject",
            settings: {
                showSearch: false,
            },
        });
    }

    new Swiper(".jo-shop-related-videos-slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        navigation: {
            prevEl: ".jo-shop-related-videos-slider-nav .prev",
            nextEl: ".jo-shop-related-videos-slider-nav .next",
        },
    });
});

// ================================================================================
//                     CONTACT FORM
// =================================================================================

document.addEventListener("DOMContentLoaded", function() {
    // target both forms
    const FORM_SELECTORS = [".jo-inner-contact-form", ".jo-contact-form"];

    // Create one modal shared by all forms
    function createModal() {
        const backdrop = document.createElement("div");
        backdrop.className = "jo-modal-backdrop";
        backdrop.setAttribute("role", "dialog");
        backdrop.setAttribute("aria-live", "polite");
        backdrop.setAttribute("aria-hidden", "true");

        const modal = document.createElement("div");
        modal.className = "jo-modal";
        modal.innerHTML = `
      <div class="jo-icon" aria-hidden="true" style="display:none;">✔</div>
      <div class="jo-spinner" aria-hidden="true"></div>
      <div class="jo-modal-title">Processing</div>
      <div class="jo-modal-sub">Please wait — your message is being sent.</div>
      <div class="sr-only" id="jo-modal-status"></div>
    `;

        backdrop.appendChild(modal);
        document.body.appendChild(backdrop);
        return {
            backdrop,
            modal,
            title: modal.querySelector(".jo-modal-title"),
            sub: modal.querySelector(".jo-modal-sub"),
            spinner: modal.querySelector(".jo-spinner"),
            icon: modal.querySelector(".jo-icon"),
            sr: modal.querySelector("#jo-modal-status"),
        };
    }

    const modalEl = createModal();

    function showModal(state = "processing", messageTitle, messageSub) {
        const {
            backdrop,
            modal,
            title,
            sub,
            spinner,
            icon,
            sr
        } = modalEl;
        backdrop.classList.add("show");
        backdrop.setAttribute("aria-hidden", "false");

        modal.classList.remove("success", "error");
        icon.style.display = "none";
        spinner.style.display = "inline-block";

        if (state === "processing") {
            title.textContent = messageTitle || "Processing";
            sub.textContent =
                messageSub || "Please wait — your message is being sent.";
            spinner.style.display = "inline-block";
        } else if (state === "success") {
            modal.classList.add("success");
            icon.textContent = "✔";
            icon.style.display = "inline-block";
            title.textContent = messageTitle || "Submitted";
            sub.textContent =
                messageSub || "Your message has been sent successfully.";
            spinner.style.display = "none";
        } else if (state === "error") {
            modal.classList.add("error");
            icon.textContent = "✖";
            icon.style.display = "inline-block";
            title.textContent = messageTitle || "Error";
            sub.textContent =
                messageSub ||
                "There was an error sending your message. Please try again.";
            spinner.style.display = "none";
        }

        sr.textContent = title.textContent + " — " + sub.textContent;
    }

    function hideModal(delay = 2200) {
        setTimeout(() => {
            modalEl.backdrop.classList.remove("show");
            modalEl.backdrop.setAttribute("aria-hidden", "true");
        }, delay);
    }

    // allow closing by ESC or clicking backdrop
    modalEl.backdrop.addEventListener("click", function(e) {
        if (e.target === modalEl.backdrop)
            modalEl.backdrop.classList.remove("show");
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") modalEl.backdrop.classList.remove("show");
    });

    // Attach submit handler to all matching forms
    const forms = Array.from(
        document.querySelectorAll(FORM_SELECTORS.join(", "))
    );
    forms.forEach((form) => {
        form.addEventListener("submit", async function(e) {
            e.preventDefault();

            // disable this form's submit button(s)
            const submitBtn = form.querySelector(
                'button[type="submit"], input[type="submit"]'
            );
            if (submitBtn) submitBtn.disabled = true;

            showModal("processing");

            // Use FormData collected from this specific form
            const fd = new FormData(form);

            try {
                const res = await fetch(form.action, {
                    method: "POST",
                    body: fd
                });
                const text = await res.text();
                let data = null;
                try {
                    data = JSON.parse(text);
                } catch (err) {
                    /* ignore */
                }

                // success if HTTP OK and (server returned ok/message or no JSON but 200)
                if (res.ok && (data === null || data.ok === true || data.message)) {
                    showModal(
                        "success",
                        data && data.message ? data.message : "Submitted",
                        "Thank you — we received your message."
                    );
                    // reset only this form
                    try {
                        form.reset();
                    } catch (err) {}
                    hideModal(1800);
                } else {
                    const msg =
                        data && (data.message || data.errors) ?
                        data.message ||
                        (Array.isArray(data.errors) ?
                            data.errors.join(", ") :
                            JSON.stringify(data.errors)) :
                        text || res.status + " " + res.statusText;
                    showModal("error", "Submission failed", String(msg));
                    console.error("Form submit error:", res.status, data || text);
                    hideModal(4000);
                }
            } catch (err) {
                console.error("Network error:", err);
                showModal(
                    "error",
                    "Network error",
                    "Network error — please try again."
                );
                hideModal(4000);
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    });
});