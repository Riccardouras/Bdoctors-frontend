<script>

import { backendPaths } from '../data/backendPaths';

export default {
    name: 'AppHeader',
    data() {
        return {
            backendPaths
        }
    }
}

</script>

<template>
    <div>
        <slot></slot>
    </div>
    <header class="header-doctor position-relative">
        <div class="header-wrapper container-lg">
            <nav class="navbar navbar-expand-sm navbar-light justify-content-between w-100">
                <a href="/" class="navbar-brand textColorDark fw-bold p-0 h-100">
                    <img id="navbarIcon" class="h-100" src="../img/logoNoBackground.png" alt="site icon">
                </a>
                <button class=" d-sm-none btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"><i class="menu-icon fa-solid fa-bars"></i></button>

                <div class="d-sm-none offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header d-flex justify-content-end">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav gap-3 ms-auto">
                            <li class="nav-item">
                                <a class="nav-link hover-secondary" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hover-secondary" href="/aboutus">About Us</a>
                            </li>
                            <!-- <li class="nav-item">
                            <a class="nav-link hover-secondary" :href="backendPaths.registerURL">Registrati</a>
                        </li> -->
                            <li class="nav-item">
                                <a class="nav-link " :href="backendPaths.loginURL">Area riservata</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ************************************************* -->
                <div id="sectionNavBar" class="collapse navbar-collapse ms-auto text-end">
                    <ul class="navbar-nav gap-3 ms-auto">
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" href="/aboutus">About Us</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link hover-secondary" :href="backendPaths.registerURL">Registrati</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link " :href="backendPaths.loginURL">Area riservata</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template> 

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as var;

@media (max-width: 576px) {
    #sectionNavBar {
        position: absolute;
        top: 80px;
        right: 1px;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(23, 165, 245, 0.2);
        color: white;
    }
}

header {
    background-color: var.$primaryColor;

    .nav-link {
        color: #0b6091;

    }

    .nav-link:hover {
        text-decoration: underline;
    }

}

.navbar {
    height: 100px;
}

.navbarIcon {
    color: white;
}

header {
    background: transparent;
}

.menu-icon{
    font-size: 2rem;
}

#offcanvasRight {
    width: 40%;
    opacity: 0.95;
}
</style>