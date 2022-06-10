<template>
  <div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
      <h4>Your Position</h4>
      Latitude: {{ coordinates.lat }}, Longitude;
      {{ coordinates.lng }}
    </div>
    <div>
      <GmapMap :center="{ lat: 10, lng: 10 }" :zoom="7" style="width: 500px; height: 300px"></GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 7,
    };
  },
  created() {
    if (localStorage.center) {
      this.coordinates = JSON.parse(localStorage.center);
    } else {
      this.$getLocation({})
        .then((coordinates) => {
          this.coordinates = coordinates;
        })
        .catch((error) => alert(error));
    }

    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
};
</script>
