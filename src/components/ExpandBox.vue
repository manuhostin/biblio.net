<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="Imagem do card" class="card-image" />
      <div class="overlay"></div>
    </div>
    <div class="card-content">
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  position: relative;
}

.card-image {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  pointer-events: none; /* Allows click events to pass through */
}

.card-content {
  padding: 16px;
}

.card-description {
  font-size: 20px;
  color: #ffffff;
}
</style>
