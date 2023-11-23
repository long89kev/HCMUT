<script lang="ts">
	import ImageSection from "$lib/component/ImageSection.svelte";
    import Logo from "$lib/assets/logo.svg";
    import MapMarker from "$lib/assets/map-marker.svg";
    import Book from "$lib/assets/book.svg";
    import FrequentlyAskedQuestions from "$lib/assets/frequently-asked-questions.svg";
</script>

<div class="flex flex-col my-32 gap-32 mx-4 lg:w-[72rem] lg:mx-auto">
    <ImageSection class="w-full" src={Logo} alt="Logo" width={256} height={256} align="right">
        <h1 class="bg-gradient-to-r from-primary to-accent box-decoration-clone bg-clip-text text-transparent">HCMUT: Maps & Guides</h1>
        <p class="text-2xl">This website provides comprehensive resources to help you navigate Ho Chi Minh City University of Technology <abbr>(HCMUT)</abbr> with ease. Whether you are a prospective student, a current student, or a visitor, this website will guide you through the campus and provide essential information to make your <abbr title="Ho Chi Minh University of Techonology">HCMUT</abbr> experience a success.</p>
    </ImageSection>
    <ImageSection class="w-full" src={MapMarker} alt="Map marker" width={128} height={128} align="left">
        <a href="/maps" class="underline-offset-4 decoration-2 decoration-primary">
            <h1 class="bg-gradient-to-r from-primary box-decoration-clone bg-clip-text text-transparent">Maps</h1>
        </a>
        <p class="text-2xl">Traverse through the extensive facilities of <abbr title="Ho Chi Minh University of Techonology">HCMUT</abbr> with ease.</p>
    </ImageSection>
    <ImageSection class="w-full" src={Book} alt="Book" width={128} height={128} align="left">
        <a href="/guides" class="underline-offset-4 decoration-2 decoration-primary">
            <h1 class="bg-gradient-to-r from-primary box-decoration-clone bg-clip-text text-transparent">Guides</h1>
        </a>
        <p class="text-2xl">All the details of <abbr title="Ho Chi Minh University of Techonology">HCMUT</abbr> available at your fingertip.</p>
    </ImageSection>
    <ImageSection class="w-full" src={FrequentlyAskedQuestions} alt="FAQ" width={128} height={128} align="left">
        <a href="/faq" class="underline-offset-4 decoration-2 decoration-primary">
            <h1 class="bg-gradient-to-r from-primary box-decoration-clone bg-clip-text text-transparent">FAQ</h1>
        </a>
        <p class="text-2xl">Have a burning question about us? You will likely find the answer here.</p>
    </ImageSection>
</div>