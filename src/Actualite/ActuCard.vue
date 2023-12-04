<template>
    <div class="container-sm bg-body-tertiary py-2 my-3">
        <div class="mb-2">
            <div class="d-flex gap-3">
                <span class='badge bg-danger px-2 py-1 shadow-1-strong'>Administration</span>
                <span class='badge bg-danger px-2 py-1 shadow-1-strong'>Enseignant</span>
                <span class='badge bg-danger px-2 py-1 shadow-1-strong'>Communication</span>
            </div>
            <p class="fs-3 mb-0">title</p>
            <p class="fs-6 mb-0">Par <span>utilisateur</span> - le <span>{date}</span></p>
        </div>
        <p class="text-muted fs-6">
            text
        </p>
    </div>
</template>

<script>
export default {
  name: 'ActuCard'
}
</script>