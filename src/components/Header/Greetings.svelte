<script lang="ts">
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let text = "";

  if (currentHour < 12) {
    text = "Good Morning";
  } else if (currentHour < 18) {
    text = "Good Afternoon";
  } else {
    text = "Good Night";
  }
</script>

<h1 class="text-2xl font-bold">{text}</h1>
