document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       ONE LAST BUILD — MAIN JS
       ========================================================= */

    const pageLoader = document.getElementById("pageLoader");
    const header = document.querySelector(".site-header");
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    /* =========================================================
       COLLEAGUES
       ========================================================= */

    const colleagues = [
        {
            name: "Uwais",
            role: "Web Developer",
            tag: "Crime Partner",
            message: `
                Uwais was literally the first colleague in this journey.
                From day-one work problems to random masti, we became crime
                partners in web development.

                A lot of things were learned together, a lot of bugs were
                fought together, and somehow we survived.

                Now you're gone too, but the memories are staying.
            `,
            memory: "The first colleague, the first chaos, and one of the best parts of the beginning.",
            willMiss: "The crime-partner energy.",
            insideJoke: "Web development crimes were never committed alone."
        },

        {
            name: "Vinit",
            role: "3D Designer",
            tag: "Upper Floor Masti",
            message: `
                Vinit was one of those people who made work feel less like
                work.

                Sitting upstairs with almost no disturbance meant one thing:
                unlimited masti.

                Those random conversations and stupid moments are honestly
                some of the memories I'll remember the most.
            `,
            memory: "Upper floor + no disturbance + Vinit = guaranteed masti.",
            willMiss: "The random upper-floor chaos.",
            insideJoke: "Work was happening... technically."
        },

        {
            name: "Rohit",
            role: "3D Designer",
            tag: "Same Vibe",
            message: `
                Rohit had the same kind of vibe that made normal office days
                much more entertaining.

                Some people become memorable because of big moments.
                Some become memorable because of hundreds of tiny,
                stupid and funny moments.

                You're definitely part of the second category.
            `,
            memory: "The everyday masti that somehow became unforgettable.",
            willMiss: "That familiar vibe.",
            insideJoke: "Serious work was always just five minutes away."
        },

        {
            name: "PD Bhaiya",
            role: "3D Designer",
            tag: "Like An Elder Brother",
            message: `
                PD Bhaiya was never just a colleague.

                Sometimes serious, sometimes full masti, but always carrying
                that elder-brother kind of presence.

                Whenever there was no work, somehow the entire environment
                became lighter.

                Thank you for being part of this journey, Bhaiya.
            `,
            memory: "That elder-brother energy that made the office feel familiar.",
            willMiss: "The Bhaiya moments.",
            insideJoke: "No work = maximum masti."
        },

        {
            name: "Ankit Dada",
            role: "Accountant",
            tag: "Masti Department",
            message: `
                Ankit Dada was from the accounts side, but somehow managed
                to become part of the masti department too.

                The same energy, the same random conversations, and the same
                kind of moments that made normal days memorable.

                Thank you, Dada, for being part of the story.
            `,
            memory: "An accountant who somehow had a permanent membership in the masti department.",
            willMiss: "The random conversations.",
            insideJoke: "Accounts bhi, masti bhi."
        },

        {
            name: "Yadnesh",
            role: "Graphic Designer",
            tag: "Always Helpful",
            message: `
                Yadnesh was always helpful.

                Whenever something needed to happen, there was always that
                feeling that I could ask and somehow it would get sorted.

                Of course, being helpful didn't mean there wasn't masti.
                There was plenty of that too.

                Thank you for everything, Yadnesh.
            `,
            memory: "Helpful whenever needed, but never missing from the masti.",
            willMiss: "The helpful nature.",
            insideJoke: "Help first. Masti immediately after."
        },

        {
            name: "Rima Ma’am",
            role: "Graphic Designer",
            tag: "Always Helpful",
            message: `
                Rima Ma’am was always kind and helpful.

                It's these small things that you don't always notice while
                you're working every day, but once you're leaving, you realise
                how much those little moments actually mattered.

                Thank you for being part of my journey.
            `,
            memory: "The small helpful moments that became part of everyday office life.",
            willMiss: "The kindness and support.",
            insideJoke: "One more image... please."
        },

        {
            name: "Amrita Ma’am",
            role: "Client Service Executive",
            tag: "Sorry For The Images 😂",
            message: `
                I’m pretty sure you tested my patience more than once by being late with the images.

                Actually... more than once. 😂

                But behind all those “Ma’am, images kab aayenge?” moments was still a lot of teamwork, and I’m genuinely thankful for that.

                Sorry for all the times I had to wait for the images, Ma’am. 😂
            `,
            memory: "Every time the images were late and somehow there was still an excuse. 😭",
            willMiss: "Irritating You😂",
            insideJoke: "Image bhej rahi hoon, call krti hu darshana ko”"
        },

        {
            name: "Prajol Ma’am",
            role: "Client Service Executive",
            tag: "Waste of Time 😂",
            message: `
                Thank you for always coordinating with the client whenever there was a need and making sure things got sorted without making it look like a big task. From random work-related conversations to unnecessary timepass, you somehow managed to make even the most boring coordination moments entertaining. 😂 Your presence, your constant coordination, and those little interactions definitely made the workdays a lot more fun and memorable.
            `,
            memory: "Every client coordination somehow turned into a little timepass session. 😂",
            willMiss: "Your random conversations, coordination, and effortless timepass. 😂",
            insideJoke: "Client coordination = 10% work and 90% timepass. 😂"

        },

        {
            name: "Shreya Ma’am",
            role: "Client Service Executive",
            tag: "Tom & Jerry Department",
            message: `
                Shreya Ma’am...

                I probably irritated you a lot.

                But somewhere between all those arguments, conversations,
                jokes and random talks, you became someone I genuinely
                trusted.

                You shared everything with me, I shared everything with you,
                and somehow in just around three months the bonding became
                much stronger than expected.

                It never really felt like just colleague-colleague.
                More like a younger-brother relationship.

                Thank you for trusting me.
                And yes... sorry for irritating you so much. ❤️
            `,
            memory: "Three months that somehow felt much longer because of the bonding.",
            willMiss: "The random talks and trust.",
            insideJoke: "Tom and Jerry officially existed because of us."
        },

        {
            name: "Sanket Dada",
            role: "3D Designer",
            tag: "Buddha 😂",
            message: `
                Sanket Dada joined recently, but somehow that short time was
                enough for a lot of masti.

                And yes, I called you Buddha because apparently age was the
                easiest thing to target. 😂

                Short time, lots of memories.
            `,
            memory: "Recently joined, immediately became part of the masti.",
            willMiss: "Calling you Buddha. 😂",
            insideJoke: "Buddha mode: permanently activated."
        },


        {
            name: "Gaurav",
            role: "UI Designer",
            tag: "Indori Anarkali",
            message: `
                Gaurav...

                aka Indori Anarkali.

                According to Shreya Ma’am, we were basically Tom and Jerry.

                We argued, disagreed, irritated each other and somehow still
                got things done.

                That's probably what made the whole thing fun.

                Every office needs one person to argue with.
                Unfortunately, that person was you. 😂
            `,
            memory: "Arguments that somehow became part of the friendship.",
            willMiss: "The daily Tom & Jerry episodes.",
            insideJoke: "Indori Anarkali reporting for duty."
        },

        {
            name: "Laxman",
            role: "Office Support",
            tag: "Thank You",
            message: `
                Laxman,

                thank you for all the little things you did around the office.

                Sometimes the people who help the most are the people who
                don't get enough appreciation.

                So before I leave, I just want to say:

                Thank you from my heart.
            `,
            memory: "The everyday help that often goes unnoticed.",
            willMiss: "The small acts of help.",
            insideJoke: "Office ka asli support system."
        },

        {
            name: "Mayur",
            role: "Production Head",
            tag: "Call Department 😂",
            message: `
                Mayur...

                Bas call karta hai. 😂

                Kuch nahi hota.

                But somehow, kaam dhakalta bhi hai.

                Helpful bhi hai, not helpful bhi hai.

                Basically production ka ek alag hi operating system hai.

                Jokes apart, thank you for always being part of the process
                and helping things move forward.
            `,
            memory: "Calls, follow-ups and somehow getting the work moving.",
            willMiss: "The legendary calls.",
            insideJoke: "Call karta kam, kaam dhakalta zyada. 😂"
        },

        {
            name: "Tulsi Madam",
            role: "3D Designer",
            tag: "Quiet & Helpful",
            message: `
                Tulsi Madam,

                I haven't talked with you as much as some of the others,
                but whenever we did interact, you were always innocent,
                kind and helpful.

                Sometimes people don't need a huge story to be remembered.

                A simple, good presence is enough.

                Thank you for being part of my journey.
            `,
            memory: "The quiet, innocent and helpful presence in the office.",
            willMiss: "The simple kindness.",
            insideJoke: "Less conversation, but always good vibes."
        }
    ];


    /* =========================================================
       LOADER
       ========================================================= */

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (pageLoader) {
                pageLoader.classList.add("loaded");
            }
        }, 3000);
    });


    /* =========================================================
       HEADER
       ========================================================= */

    function handleHeaderScroll() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll, {
        passive: true
    });

    handleHeaderScroll();


    /* =========================================================
       MOBILE MENU
       ========================================================= */

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");

            mobileToggle.classList.toggle("active", isOpen);
            mobileToggle.setAttribute("aria-expanded", isOpen);
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                mobileToggle.classList.remove("active");
                mobileToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* =========================================================
       REVEAL ANIMATIONS
       ========================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }


    /* =========================================================
       MEMORY MODAL
       ========================================================= */

    const memoryModal = document.getElementById("memoryModal");
    const closeMemory = document.getElementById("modalClose");

    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalMessage = document.getElementById("modalMessage");
    const modalMemory = document.getElementById("modalMemory");
    const modalWillMiss = document.getElementById("modalWillMiss");
    const modalInsideJoke = document.getElementById("modalInsideJoke");


    window.openMemory = function(index) {
        const person = colleagues[index];

        if (!person || !memoryModal) {
            console.warn("Memory not found:", index);
            return;
        }

        if (modalName) {
            modalName.textContent = person.name;
        }

        if (modalRole) {
            modalRole.textContent = person.role;
        }

        if (modalMessage) {
            modalMessage.innerHTML = person.message
                .trim()
                .split(/\n\s*\n/)
                .map(paragraph => `<p>${paragraph.trim()}</p>`)
                .join("");
        }

        if (modalMemory) {
            modalMemory.textContent = person.memory;
        }

        if (modalWillMiss) {
            modalWillMiss.textContent = person.willMiss;
        }

        if (modalInsideJoke) {
            modalInsideJoke.textContent = person.insideJoke;
        }

        memoryModal.classList.add("open");
        memoryModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };


    function closeMemoryModal() {
        if (!memoryModal) return;

        memoryModal.classList.remove("open");
        memoryModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }


    if (closeMemory) {
        closeMemory.addEventListener("click", closeMemoryModal);
    }


    if (memoryModal) {
        memoryModal.addEventListener("click", event => {
            if (event.target === memoryModal) {
                closeMemoryModal();
            }
        });
    }


    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMemoryModal();
        }
    });


    /* =========================================================
       COLLEAGUE BUTTONS
       ========================================================= */

    document.querySelectorAll("[data-colleague]").forEach(card => {
        const index = Number(card.dataset.colleague);

        const button = card.querySelector(".memory-button");

        if (button) {
            button.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();

                window.openMemory(index);
            });
        }

        card.addEventListener("click", event => {
            if (event.target.closest(".memory-button")) return;

            window.openMemory(index);
        });
    });


    /* =========================================================
       CARD TILT
       ========================================================= */

    const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    if (canHover) {
        document.querySelectorAll(".person-card").forEach(card => {
            card.addEventListener("mousemove", event => {
                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -3;
                const rotateY = ((x - centerX) / centerX) * 3;

                card.style.transform = `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                `;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "";
            });
        });
    }


    /* =========================================================
       RANDOM REVEAL DELAYS
       ========================================================= */

    document.querySelectorAll(".people-grid .reveal").forEach(
        (element, index) => {
            element.style.transitionDelay = `${index * 70}ms`;
        }
    );


    /* =========================================================
       ACTIVE NAVIGATION
       ========================================================= */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(
        ".site-nav a[href^='#'], .mobile-menu a[href^='#']"
    );

    if ("IntersectionObserver" in window && sections.length) {
        const sectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    navLinks.forEach(link => {
                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("active");
                        }
                    });
                });
            },
            {
                threshold: 0.3
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }


    /* =========================================================
       HERO MOUSE PARALLAX
       ========================================================= */

    const hero = document.querySelector(".hero");

    if (hero && canHover) {
        hero.addEventListener("mousemove", event => {
            const x =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 2;

            hero.style.setProperty(
                "--mouse-x",
                `${x * 15}px`
            );

            hero.style.setProperty(
                "--mouse-y",
                `${y * 15}px`
            );
        });

        hero.addEventListener("mouseleave", () => {
            hero.style.setProperty("--mouse-x", "0px");
            hero.style.setProperty("--mouse-y", "0px");
        });
    }


    /* =========================================================
       IMAGE FALLBACK
       ========================================================= */

    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", () => {
            img.style.opacity = "0.35";
            img.style.filter = "grayscale(1)";

            console.warn(
                "Image could not be loaded:",
                img.src
            );
        });
    });


    /* =========================================================
       FOOTER EASTER EGG
       ========================================================= */

    const footerBrand = document.querySelector(".footer-brand");

    let footerClicks = 0;
    let footerClickTimer = null;

    if (footerBrand) {
        footerBrand.addEventListener("click", () => {
            footerClicks++;

            clearTimeout(footerClickTimer);

            footerClickTimer = setTimeout(() => {
                footerClicks = 0;
            }, 1800);

            if (footerClicks >= 5) {
                footerClicks = 0;

                showFooterEasterEgg();
            }
        });
    }


    function showFooterEasterEgg() {
        const existing = document.querySelector(".footer-easter-egg");

        if (existing) {
            existing.remove();
        }

        const egg = document.createElement("div");

        egg.className = "footer-easter-egg";

        egg.innerHTML = `
            <div class="footer-easter-egg-inner">
                <span>PS — YOU THOUGHT I WAS DONE?</span>
                <p>
                    Don't worry. I'm still available for chai. ☕
                </p>
                <small>
                    Terms & conditions apply.
                </small>
            </div>
        `;

        document.body.appendChild(egg);

        requestAnimationFrame(() => {
            egg.classList.add("show");
        });

        setTimeout(() => {
            egg.classList.remove("show");

            setTimeout(() => {
                egg.remove();
            }, 500);
        }, 4500);
    }


    /* =========================================================
       CONSOLE SIGNATURE
       ========================================================= */

    console.log(
        "%cONE LAST BUILD",
        "font-size:24px;font-weight:700;"
    );

    console.log(
        "%c13 Nov 2024 → 10 Sept 2026",
        "font-size:14px;"
    );

    console.log(
        "%c#once a dowster always a dowster",
        "font-size:13px;font-style:italic;"
    );

    console.log(
        "%ccommit: one-last-build",
        "font-size:12px;"
    );
});


// Memories

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
       ========================================================= */

    const memoryIntro = document.getElementById("memoryIntro");
    const memoryStartButton = document.getElementById("memoryStartButton");

    const memoryAudio = document.getElementById("memoryAudio");

    const memoryMusicControl =
        document.getElementById("memoryMusicControl");

    const musicToggle =
        document.getElementById("musicToggle");

    const musicMute =
        document.getElementById("musicMute");

    const musicStatus =
        document.getElementById("musicStatus");

    const finalMemory =
        document.getElementById("finalMemory");

    const goodbyeName =
        document.getElementById("goodbyeName");

    const memoryEasterEgg =
        document.getElementById("memoryEasterEgg");

    const closeMemoryEasterEgg =
        document.getElementById("closeMemoryEasterEgg");

    const songItems =
        document.querySelectorAll(".song-item");


    /* =========================================================
       STATE
       ========================================================= */

    let musicStarted = false;
    let isMuted = false;

    let currentSong = null;

    let nameClickCount = 0;
    let nameClickTimer = null;

    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* =========================================================
       INITIAL PAGE STATE
       ========================================================= */

    if (
        memoryIntro &&
        !memoryIntro.classList.contains("is-hidden")
    ) {
        document.body.style.overflow = "hidden";
    }


    /* =========================================================
       START MEMORY EXPERIENCE
       ========================================================= */

    function startMemoryExperience() {

        if (musicStarted) return;

        musicStarted = true;

        document.body.style.overflow = "";

        if (memoryIntro) {
            memoryIntro.classList.add("is-hidden");
        }

        setTimeout(() => {
            if (memoryMusicControl) {
                memoryMusicControl.classList.add("is-visible");
            }
        }, 500);


        /* Start first song */

        if (memoryAudio) {

            currentSong =
                memoryAudio.getAttribute("src");

            memoryAudio.volume = 0;

            memoryAudio
                .play()
                .then(() => {

                    fadeAudioIn();

                    updateMusicStatus();

                })
                .catch(() => {

                    if (musicStatus) {
                        musicStatus.textContent =
                            "Click play to start";
                    }

                });

        }

        document.body.classList.add(
            "memories-started"
        );

        observeMemoryEntries();

    }


    /* =========================================================
       AUDIO FADE IN
       ========================================================= */

    function fadeAudioIn() {

        if (!memoryAudio || isMuted) return;

        const targetVolume = 0.55;

        if (prefersReducedMotion) {

            memoryAudio.volume =
                targetVolume;

            return;
        }

        const duration = 2500;
        const start = performance.now();

        function fadeStep(now) {

            if (!memoryAudio || isMuted) return;

            const progress =
                Math.min(
                    (now - start) / duration,
                    1
                );

            memoryAudio.volume =
                targetVolume * progress;

            if (progress < 1) {
                requestAnimationFrame(fadeStep);
            }
        }

        requestAnimationFrame(fadeStep);
    }


    /* =========================================================
       PLAY / PAUSE
       ========================================================= */

    function toggleMusic() {

        if (!memoryAudio) return;

        if (memoryAudio.paused) {

            memoryAudio
                .play()
                .then(() => {
                    updateMusicStatus();
                })
                .catch(() => {

                    if (musicStatus) {
                        musicStatus.textContent =
                            "Music unavailable";
                    }

                });

        } else {

            memoryAudio.pause();

            updateMusicStatus();

        }

    }


    /* =========================================================
       MUTE / UNMUTE
       ========================================================= */

    function toggleMute() {

        if (!memoryAudio) return;

        isMuted = !isMuted;

        memoryAudio.muted = isMuted;

        if (musicMute) {

            musicMute.textContent =
                isMuted
                    ? "Unmute"
                    : "Mute";

        }

        updateMusicStatus();

    }


    /* =========================================================
       MUSIC STATUS
       ========================================================= */

    function updateMusicStatus() {

        if (!memoryAudio || !musicStatus) return;

        if (isMuted) {

            musicStatus.textContent =
                "Muted";

        } else if (memoryAudio.paused) {

            musicStatus.textContent =
                "Paused";

        } else {

            musicStatus.textContent =
                "Playing";

        }

    }


    /* =========================================================
       PLAYLIST
       ========================================================= */

    function playSong(songItem) {

        if (!memoryAudio || !songItem) return;

        const songPath =
            songItem.dataset.song;

        const songTitle =
            songItem.dataset.title ||
            "Memory soundtrack";


        /*
         * Don't reload the same song
         * if it is already playing.
         */

        if (
            currentSong === songPath &&
            !memoryAudio.paused
        ) {
            return;
        }


        /*
         * Check whether this is a real file.
         */

        memoryAudio.pause();

        memoryAudio.src =
            songPath;

        memoryAudio.load();

        currentSong =
            songPath;


        /*
         * Update active playlist item.
         */

        songItems.forEach(item => {
            item.classList.remove("active");

            const playIcon =
                item.querySelector(".song-play");

            if (playIcon) {
                playIcon.textContent = "▶";
            }
        });

        songItem.classList.add("active");


        const activeIcon =
            songItem.querySelector(".song-play");

        if (activeIcon) {
            activeIcon.textContent = "❚❚";
        }


        /*
         * Update music controller.
         */

        if (musicStatus) {
            musicStatus.textContent =
                songTitle;
        }


        /*
         * Play.
         */

        memoryAudio.volume =
            isMuted ? 0 : 0.55;

        memoryAudio
            .play()
            .then(() => {

                updatePlaylistIcons();
                updateMusicStatus();

            })
            .catch(() => {

                /*
                 * Missing song files are expected
                 * for now because songs 02–04
                 * haven't been added yet.
                 */

                if (musicStatus) {
                    musicStatus.textContent =
                        "Song not added yet";
                }

                const icon =
                    songItem.querySelector(".song-play");

                if (icon) {
                    icon.textContent = "▶";
                }

            });

    }


    /* =========================================================
       PLAYLIST ICONS
       ========================================================= */

    function updatePlaylistIcons() {

        songItems.forEach(item => {

            const icon =
                item.querySelector(".song-play");

            if (!icon) return;

            if (
                item.classList.contains("active") &&
                memoryAudio &&
                !memoryAudio.paused
            ) {
                icon.textContent = "❚❚";
            } else {
                icon.textContent = "▶";
            }

        });

    }


    /* =========================================================
       SONG BUTTON EVENTS
       ========================================================= */

    songItems.forEach(songItem => {

        songItem.addEventListener(
            "click",
            () => {
                playSong(songItem);
            }
        );

    });


    /* =========================================================
       AUDIO EVENTS
       ========================================================= */

    if (memoryAudio) {

        memoryAudio.addEventListener(
            "play",
            () => {
                updateMusicStatus();
                updatePlaylistIcons();
            }
        );


        memoryAudio.addEventListener(
            "pause",
            () => {
                updateMusicStatus();
                updatePlaylistIcons();
            }
        );


        memoryAudio.addEventListener(
            "ended",
            () => {

                /*
                 * Keep the soundtrack looping.
                 */

                memoryAudio.currentTime = 0;

                memoryAudio
                    .play()
                    .catch(() => {
                        updateMusicStatus();
                    });

            }
        );


        memoryAudio.addEventListener(
            "error",
            () => {

                if (musicStatus) {
                    musicStatus.textContent =
                        "Music unavailable";
                }

                updatePlaylistIcons();

            }
        );

    }


    /* =========================================================
       INTRO BUTTON
       ========================================================= */

    if (memoryStartButton) {

        memoryStartButton.addEventListener(
            "click",
            startMemoryExperience
        );

    }


    /* =========================================================
       MUSIC CONTROLS
       ========================================================= */

    if (musicToggle) {

        musicToggle.addEventListener(
            "click",
            toggleMusic
        );

    }


    if (musicMute) {

        musicMute.addEventListener(
            "click",
            toggleMute
        );

    }


    /* =========================================================
       MEMORY REVEAL ANIMATIONS
       ========================================================= */

    function observeMemoryEntries() {

        const entries =
            document.querySelectorAll(
                ".memory-entry, " +
                ".memory-photo-large, " +
                ".scrap-photo, " +
                ".film-strip, " +
                ".memory-music-inner, " +
                ".memory-quiet-inner, " +
                ".memory-goodbye-inner"
            );


        if (!entries.length) return;


        /*
         * Accessibility / reduced motion.
         */

        if (prefersReducedMotion) {

            entries.forEach(entry => {
                entry.classList.add("visible");
            });

            return;
        }


        if (!("IntersectionObserver" in window)) {

            entries.forEach(entry => {
                entry.classList.add("visible");
            });

            return;
        }


        const observer =
            new IntersectionObserver(
                (items, obs) => {

                    items.forEach(item => {

                        if (!item.isIntersecting) {
                            return;
                        }

                        item.target.classList.add(
                            "visible"
                        );

                        obs.unobserve(
                            item.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -8% 0px"
                }
            );


        entries.forEach(entry => {
            observer.observe(entry);
        });

    }


    /*
     * Start observing immediately as well,
     * so the first visible content animates
     * even before music is started.
     */

    observeMemoryEntries();


    /* =========================================================
       FINAL MEMORY REVEAL
       ========================================================= */

    if (finalMemory) {

        if (prefersReducedMotion) {

            finalMemory.classList.add(
                "visible"
            );

        } else if (
            "IntersectionObserver" in window
        ) {

            const finalObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                finalMemory.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.2
                    }
                );

            finalObserver.observe(
                finalMemory
            );

        } else {

            finalMemory.classList.add(
                "visible"
            );

        }

    }


    /* =========================================================
       GOODBYE NAME EASTER EGG
       ========================================================= */

    function handleNameClick() {

        if (!goodbyeName) return;

        nameClickCount++;

        clearTimeout(
            nameClickTimer
        );

        nameClickTimer =
            setTimeout(() => {
                nameClickCount = 0;
            }, 1500);


        /*
         * Four clicks.
         */

        if (nameClickCount >= 4) {

            nameClickCount = 0;

            openMemoryEasterEgg();

        }

    }


    /* =========================================================
       KEYBOARD ACCESS
       ========================================================= */

    function handleNameKeydown(event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleNameClick();

        }

    }


    if (goodbyeName) {

        goodbyeName.addEventListener(
            "click",
            handleNameClick
        );

        goodbyeName.addEventListener(
            "keydown",
            handleNameKeydown
        );

    }


    /* =========================================================
       EASTER EGG OPEN
       ========================================================= */

    function openMemoryEasterEgg() {

        if (!memoryEasterEgg) return;

        memoryEasterEgg.classList.add(
            "visible"
        );

        memoryEasterEgg.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =========================================================
       EASTER EGG CLOSE
       ========================================================= */

    function closeMemoryEasterEggModal() {

        if (!memoryEasterEgg) return;

        memoryEasterEgg.classList.remove(
            "visible"
        );

        memoryEasterEgg.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    if (closeMemoryEasterEgg) {

        closeMemoryEasterEgg.addEventListener(
            "click",
            closeMemoryEasterEggModal
        );

    }


    /* =========================================================
       ESCAPE
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                memoryEasterEgg &&
                memoryEasterEgg.classList.contains(
                    "visible"
                )
            ) {

                closeMemoryEasterEggModal();

            }

        }
    );


    /* =========================================================
       EASTER EGG BACKDROP
       ========================================================= */

    if (memoryEasterEgg) {

        memoryEasterEgg.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    memoryEasterEgg
                ) {

                    closeMemoryEasterEggModal();

                }

            }
        );

    }


    /* =========================================================
       FINAL INITIALIZATION
       ========================================================= */

    updateMusicStatus();
    updatePlaylistIcons();


    console.log(
        "%cONE LAST BUILD — MEMORIES",
        "font-size:22px;font-weight:700;"
    );

    console.log(
        "%cMemories experience initialized.",
        "font-size:13px;"
    );

    console.log(
        "%c13 Nov 2024 → 10 Sept 2026",
        "font-size:12px;"
    );

    console.log(
        "%c#once a dowster always a dowster",
        "font-size:12px;font-style:italic;"
    );

});













/* =========================================================
   HOME PAGE MUSIC
   ========================================================= */

const homeAudio = document.getElementById("homeAudio");
const homeMusicControl = document.getElementById("homeMusicControl");
const homeMusicToggle = document.getElementById("homeMusicToggle");
const homeMusicMute = document.getElementById("homeMusicMute");
const homeMusicStatus = document.getElementById("homeMusicStatus");

let homeMusicMuted = false;
let autoplayBlocked = false;


/* =========================================================
   SHOW MUSIC PLAYER
   ========================================================= */

setTimeout(() => {

    if (homeMusicControl) {
        homeMusicControl.classList.add("is-visible");
    }

}, 1200);


/* =========================================================
   UPDATE STATUS
   ========================================================= */

function updateHomeMusicStatus() {

    if (!homeAudio) {
        return;
    }

    if (homeMusicStatus) {

        if (homeAudio.muted) {
            homeMusicStatus.textContent = "Muted";

        } else if (homeAudio.paused) {
            homeMusicStatus.textContent = "Paused";

        } else {
            homeMusicStatus.textContent = "Playing";
        }
    }


    if (homeMusicToggle) {

        homeMusicToggle.textContent =
            homeAudio.paused ? "Play" : "Pause";
    }


    if (homeMusicMute) {

        homeMusicMute.textContent =
            homeAudio.muted ? "Unmute" : "Mute";
    }
}


/* =========================================================
   START MUSIC
   ========================================================= */

function startHomeMusic() {

    if (!homeAudio) {
        return;
    }

    // LOW VOLUME
    homeAudio.volume = 0.15;


    homeAudio.play()
        .then(() => {

            updateHomeMusicStatus();

        })
        .catch(() => {

            /*
             * Browser blocked audible autoplay.
             * Start muted so playback can still begin.
             */

            autoplayBlocked = true;

            homeAudio.muted = true;
            homeMusicMuted = true;

            homeAudio.play()
                .then(() => {

                    if (homeMusicStatus) {
                        homeMusicStatus.textContent = "Tap anywhere for music";
                    }

                    if (homeMusicToggle) {
                        homeMusicToggle.textContent = "Pause";
                    }

                    if (homeMusicMute) {
                        homeMusicMute.textContent = "Unmute";
                    }

                })
                .catch(() => {

                    if (homeMusicStatus) {
                        homeMusicStatus.textContent =
                            "Press play to start";
                    }

                });
        });
}


/* =========================================================
   ENABLE SOUND AFTER FIRST USER INTERACTION
   ========================================================= */

function enableHomeMusicSound() {

    if (!homeAudio) {
        return;
    }

    if (!autoplayBlocked) {
        return;
    }

    homeAudio.muted = false;
    homeMusicMuted = false;
    homeAudio.volume = 0.15;

    homeAudio.play()
        .then(() => {

            autoplayBlocked = false;

            updateHomeMusicStatus();

        })
        .catch(() => {

            // Ignore if browser still refuses playback.

        });
}


/* =========================================================
   PLAY / PAUSE BUTTON
   ========================================================= */

if (homeMusicToggle) {

    homeMusicToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        if (!homeAudio) {
            return;
        }


        if (homeAudio.paused) {

            homeAudio.muted = false;
            homeMusicMuted = false;
            homeAudio.volume = 0.15;

            homeAudio.play()
                .then(() => {

                    autoplayBlocked = false;
                    updateHomeMusicStatus();

                })
                .catch(() => {

                    homeAudio.muted = true;
                    homeMusicMuted = true;

                    homeAudio.play()
                        .then(() => {
                            updateHomeMusicStatus();
                        });

                });

        } else {

            homeAudio.pause();

            updateHomeMusicStatus();
        }

    });
}


/* =========================================================
   MUTE / UNMUTE
   ========================================================= */

if (homeMusicMute) {

    homeMusicMute.addEventListener("click", (event) => {

        event.stopPropagation();

        if (!homeAudio) {
            return;
        }


        if (homeAudio.muted) {

            homeAudio.muted = false;
            homeMusicMuted = false;
            homeAudio.volume = 0.15;

            homeAudio.play()
                .then(() => {
                    updateHomeMusicStatus();
                })
                .catch(() => {
                    updateHomeMusicStatus();
                });

        } else {

            homeAudio.muted = true;
            homeMusicMuted = true;

            updateHomeMusicStatus();
        }

    });
}


/* =========================================================
   AUDIO EVENTS
   ========================================================= */

if (homeAudio) {

    homeAudio.addEventListener(
        "play",
        updateHomeMusicStatus
    );

    homeAudio.addEventListener(
        "pause",
        updateHomeMusicStatus
    );

    homeAudio.addEventListener(
        "volumechange",
        updateHomeMusicStatus
    );

    homeAudio.addEventListener(
        "ended",
        updateHomeMusicStatus
    );

    homeAudio.addEventListener(
        "error",
        () => {

            if (homeMusicStatus) {
                homeMusicStatus.textContent =
                    "Music unavailable";
            }

            console.error(
                "Home music could not be loaded:",
                homeAudio.error
            );

        }
    );
}


/* =========================================================
   AUTOPLAY ON PAGE LOAD
   ========================================================= */

if (homeAudio) {

    homeAudio.volume = 0.15;

    startHomeMusic();
}


/* =========================================================
   FIRST USER INTERACTION
   ========================================================= */

document.addEventListener(
    "click",
    enableHomeMusicSound,
    { once: true }
);

document.addEventListener(
    "touchstart",
    enableHomeMusicSound,
    { once: true }
);


/* =========================================================
   INITIAL STATUS
   ========================================================= */

updateHomeMusicStatus();
