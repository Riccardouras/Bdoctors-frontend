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
    <header class="header-doctor">
        <div class="header-wrapper container-lg">
            <nav class="navbar navbar-expand-lg justify-content-between w-100">
                <a href="/" class="navbar-brand textColorDark fw-bold p-0 h-100">
                    <img id="navbarIcon" class="h-100" src="../img/logoNoBackground.png" alt="site icon">
                </a>
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sectionNavBar" aria-controls="sectionNavBar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="sectionNavBar" class="collapse navbar-collapse ms-auto text-end">
                    <ul class="navbar-nav gap-3 ms-auto">
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" href="/aboutus">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" :href="backendPaths.registerURL">Registrati</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-secondary" :href="backendPaths.loginURL">Accedi</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template> 

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as var;

header {
    background-color: var.$primaryColor;

    .nav-link {
        color: white;
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
</style>