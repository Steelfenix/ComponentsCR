<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      loading: false,
      response: null
    };
  },
  created() {
    axios.get(this.url).then(response => {
      this.response = response;
      this.loading = true;
    });
  },
  render() {
    if (!this.loading)
      return this.$scopedSlots.default({
        loading: true,
        response: null
      });

    return this.$scopedSlots.default({
      loading: false,
      response: this.response.data
    });
  }
};
</script>
