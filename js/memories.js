document.addEventListener("DOMContentLoaded", () => {
    const memoryIntro = document.getElementById("memoryIntro");
    const memoryStartButton = document.getElementById("memoryStartButton");
    const memoryAudio = document.getElementById("memoryAudio");

    const memoryMusicControl = document.getElementById("memoryMusicControl");
    const musicToggle = document.getElementById("musicToggle");
    const musicMute = document.getElementById("musicMute");
    const musicStatus = document.getElementById("musicStatus");

    const finalMemory = document.getElementById("finalMemory");

    const goodbyeName = document.getElementById("goodbyeName");
    const memoryEasterEgg = document.getElementById("memoryEasterEgg");
    const closeMemoryEasterEgg =
        document.getElementById("closeMemoryEasterEgg");

    let musicStarted = false;
    let isMuted = false;

    let nameClickCount = 0;
    let nameClickTimer = null;

    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------------------------------------------
       PAGE SCROLL
    --------------------------------------------- */

    function unlockPageScroll() {
        document.body.style.overflow = "";
    }

    /* ---------------------------------------------
       START MEMORY EXPERIENCE
    --------------------------------------------- */

    function startMemoryExperience() {
        if (musicStarted) return;

        musicStarted = true;

        // Allow the page to scroll
        unlockPageScroll();

        // Hide intro screen
        if (memoryIntro) {
            memoryIntro.classList.add("is-hidden");
        }

        // Start music
        if (memoryAudio) {
            memoryAudio.volume = 0;

            memoryAudio
                .play()
                .then(() => {
                    fadeAudioIn();
                    updateMusicStatus();
                })
                .catch(() => {
                    if (musicStatus) {
                        musicStatus.textContent = "Music unavailable";
                    }
                });
        }

        // Show floating music controller
        setTimeout(() => {
            if (memoryMusicControl) {
                memoryMusicControl.classList.add("is-visible");
            }
        }, 500);

        document.body.classList.add("memories-started");

        // Start reveal animations
        observeMemoryEntries();
    }

    /* ---------------------------------------------
       AUDIO FADE IN
    --------------------------------------------- */

    function fadeAudioIn() {
        if (!memoryAudio || isMuted) return;

        const targetVolume = 0.55;

        if (prefersReducedMotion) {
            memoryAudio.volume = targetVolume;
            return;
        }

        const duration = 2500;
        const startTime = performance.now();

        function fadeStep(currentTime) {
            if (!memoryAudio || isMuted) return;

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            memoryAudio.volume = targetVolume * progress;

            if (progress < 1) {
                requestAnimationFrame(fadeStep);
            }
        }

        requestAnimationFrame(fadeStep);
    }

    /* ---------------------------------------------
       PLAY / PAUSE
    --------------------------------------------- */

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
                        musicStatus.textContent = "Music unavailable";
                    }
                });
        } else {
            memoryAudio.pause();
            updateMusicStatus();
        }
    }

    /* ---------------------------------------------
       MUTE / UNMUTE
    --------------------------------------------- */

    function toggleMute() {
        if (!memoryAudio) return;

        isMuted = !isMuted;

        memoryAudio.muted = isMuted;

        if (musicMute) {
            musicMute.textContent = isMuted ? "Unmute" : "Mute";
        }

        updateMusicStatus();
    }

    /* ---------------------------------------------
       MUSIC STATUS
    --------------------------------------------- */

    function updateMusicStatus() {
        if (!memoryAudio || !musicStatus) return;

        if (isMuted) {
            musicStatus.textContent = "Muted";
        } else if (memoryAudio.paused) {
            musicStatus.textContent = "Paused";
        } else {
            musicStatus.textContent = "Playing";
        }
    }

    /* ---------------------------------------------
       MEMORY REVEAL ANIMATIONS
    --------------------------------------------- */

    function observeMemoryEntries() {
        const entries = document.querySelectorAll(".memory-entry");

        if (!entries.length) return;

        // Accessibility / reduced-motion mode
        if (prefersReducedMotion) {
            entries.forEach((entry) => {
                entry.classList.add("visible");
            });

            return;
        }

        const observer = new IntersectionObserver(
            (items, obs) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        item.target.classList.add("visible");

                        obs.unobserve(item.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -8% 0px"
            }
        );

        entries.forEach((entry) => {
            observer.observe(entry);
        });
    }

    /* ---------------------------------------------
       FINAL MEMORY REVEAL
    --------------------------------------------- */

    function observeFinalMemory() {
        if (!finalMemory) return;

        if (prefersReducedMotion) {
            finalMemory.classList.add("visible");
            return;
        }

        const observer = new IntersectionObserver(
            (items, obs) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        finalMemory.classList.add("visible");

                        obs.unobserve(item.target);
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        observer.observe(finalMemory);
    }

    /* ---------------------------------------------
       EASTER EGG
       Click name 4 times
    --------------------------------------------- */

    function handleNameClick() {
        if (!goodbyeName) return;

        nameClickCount++;

        clearTimeout(nameClickTimer);

        nameClickTimer = setTimeout(() => {
            nameClickCount = 0;
        }, 1500);

        if (nameClickCount >= 4) {
            nameClickCount = 0;

            openMemoryEasterEgg();
        }
    }

    /* ---------------------------------------------
       EASTER EGG KEYBOARD SUPPORT
    --------------------------------------------- */

    function handleNameKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();

            handleNameClick();
        }
    }

    /* ---------------------------------------------
       OPEN EASTER EGG
    --------------------------------------------- */

    function openMemoryEasterEgg() {
        if (!memoryEasterEgg) return;

        memoryEasterEgg.classList.add("visible");

        memoryEasterEgg.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }

    /* ---------------------------------------------
       CLOSE EASTER EGG
    --------------------------------------------- */

    function closeMemoryEasterEggModal() {
        if (!memoryEasterEgg) return;

        memoryEasterEgg.classList.remove("visible");

        memoryEasterEgg.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }

    /* ---------------------------------------------
       ESCAPE KEY
    --------------------------------------------- */

    function handleEscape(event) {
        if (
            event.key === "Escape" &&
            memoryEasterEgg &&
            memoryEasterEgg.classList.contains("visible")
        ) {
            closeMemoryEasterEggModal();
        }
    }

    /* ---------------------------------------------
       EVENT LISTENERS
    --------------------------------------------- */

    if (memoryStartButton) {
        memoryStartButton.addEventListener(
            "click",
            startMemoryExperience
        );
    }

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

    if (closeMemoryEasterEgg) {
        closeMemoryEasterEgg.addEventListener(
            "click",
            closeMemoryEasterEggModal
        );
    }

    document.addEventListener(
        "keydown",
        handleEscape
    );

    /* ---------------------------------------------
       AUDIO EVENTS
    --------------------------------------------- */

    if (memoryAudio) {
        memoryAudio.addEventListener(
            "play",
            updateMusicStatus
        );

        memoryAudio.addEventListener(
            "pause",
            updateMusicStatus
        );

        memoryAudio.addEventListener(
            "ended",
            () => {
                // Loop manually
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
                    musicStatus.textContent = "Music unavailable";
                }
            }
        );
    }

    /* ---------------------------------------------
       LOCK PAGE UNTIL "I'M READY"
    --------------------------------------------- */

    if (
        memoryIntro &&
        !memoryIntro.classList.contains("is-hidden")
    ) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    /* ---------------------------------------------
       INITIALIZE FINAL MEMORY
    --------------------------------------------- */

    observeFinalMemory();

    /* ---------------------------------------------
       DEBUG
    --------------------------------------------- */

    console.log(
        "%cONE LAST BUILD",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cMemories experience initialized.",
        "font-size:13px;"
    );
});