<script>
	import FaqBox from "./FaqBox.svelte";

</script>
<div class="w-full mx-auto max-w-6xl">
    <h1>Frequently asked questions</h1>
    <p>Here are some frequently asked questions about <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr>.</p>

    <FaqBox>
        <span slot="title">Where is <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr> located?</span>
        <p slot="body"><abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr> is located in Ho Chi Minh City, Vietnam.</p>
    </FaqBox>

    <FaqBox>
        <span slot="title">What is the best way to get around <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr>?</span>
        <p slot="body">The best way to get around <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr> is by walking or biking.</p>
    </FaqBox>

    <FaqBox>
        <span slot="title">How can I get to a different part of the city?</span>
        <p slot="body">You can take a bus or taxi to a different part of the city.</p>
    </FaqBox>

    <FaqBox>
        <span slot="title">Does <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr> have a shuttle bus service?</span>
        <p slot="body">Yes, <abbr title="Ho Chi Minh city University of Technology">HCMUT</abbr> has a shuttle bus service that runs between the main campus and the university's satellite campuses.</p>
    </FaqBox>
</div>