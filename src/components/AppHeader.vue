<script>

    import { backendPaths } from '../data/backendPaths';

    export default{
        name: 'AppHeader',
        data(){
            return{
                backendPaths
            }
        }
    }

</script>

<template>

    <header>
        <div class="header-wrapper container">
            <nav class="navbar navbar-expand justify-content-between">
                <a href="/" class="navbar-brand textColorDark fw-bold p-0 h-100">
                    <img id="navbarIcon" class="h-100" src="../img/logoNoBackground.png" alt="site icon">
                </a>

                <div id="sectionNavBar">

                    <ul class="navbar-nav gap-2">
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

    <!-- <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }"> -->


</template>

<style lang="scss" scoped>

@use '../style/partials/variables.scss' as var;

    header{
        background-color: var.$primaryColor;
        
        .nav-link{
            color: white;
        }
    }

    .navbar{
        height: 100px;
    }





</style>