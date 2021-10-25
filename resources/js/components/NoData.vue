<template>
  <div class="row">
    <div :class="classes ? classes : 'mt-4'" class="col-12 text-center">
      <svg
        v-if="showSvg"
        xmlns="http://www.w3.org/2000/svg"
        id="b5d1da7b-a9c6-4711-8d73-fa7937ec989e"
        data-name="Layer 1"
        width="100%"
        height="90"
        class="mb-3"
        viewBox="0 0 888 340"
      >
        <title>server_cluster</title>
        
        <rect
          x="60"
          y="509.90391"
          width="262"
          height="195"
          transform="translate(1051.40391 -87.19257) rotate(90)"
          fill="#2f2e41"
        />
        <rect x="313" y="0" width="262" height="104" fill="#3f3d56" />
        <rect x="313" y="116" width="262" height="104" fill="#3f3d56" />
        <rect x="313" y="232" width="262" height="104" fill="#3f3d56" />
        <rect x="313" y="58" width="262" height="16" fill="#0d0a08" />
        <rect x="313" y="174" width="262" height="16" fill="#0d0a08" />
        <rect x="313" y="294" width="262" height="16" fill="#0d0a08" />
        <circle cx="524" cy="20" r="6" fill="#0d0a08" />
        <circle cx="545" cy="20" r="6" fill="#0d0a08" />
        <circle cx="566" cy="20" r="6" fill="#0d0a08" />
        <circle cx="524" cy="136" r="6" fill="#0d0a08" />
        <circle cx="545" cy="136" r="6" fill="#0d0a08" />
        <circle cx="566" cy="136" r="6" fill="#0d0a08" />
        <circle cx="524" cy="254" r="6" fill="#0d0a08" />
        <circle cx="545" cy="254" r="6" fill="#0d0a08" />
        <circle cx="566" cy="254" r="6" fill="#0d0a08" />
        
      </svg>
      <h3 class="h2 font-weight-500 mb-0" v-if="showTitle">No Data</h3>
      <p :class="showButton ? 'mb-1' : ''">
        {{
          customText ? customText : "No hay datos disponibles en estos momentos"
        }}
      </p>
      <a :href="routeButton" class="btn btn-inverse-info" v-if="showButton"
        >Crea {{ elementTextButton }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showSvg: {
      default: true,
      type: Boolean,
    },
    customText: {
      type: String,
    },
    showButton: {
      default: false,
      type: Boolean,
    },
    routeButton: String,
    elementTextButton: String,
    classes: Array,
    showTitle: {
      default: true,
      type: Boolean,
    },
  },
};
</script>