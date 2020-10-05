<template>
	<v-app>
		<v-app-bar app :color="primaryColor" height="80" elevate-on-scroll dark>
			<v-avatar class="mr-3" size="40">
				<v-icon large color="amber lighten-1">mdi-glass-mug-variant</v-icon>
			</v-avatar>

			<v-toolbar-title class="white--text font-weight-thin brand-text">
				Jiwoong Kim
			</v-toolbar-title>
			<v-spacer />

			<template v-if="$vuetify.breakpoint.smAndUp">
				<v-btn href="/#about" text class="white--text mr-5">
					<span>ABOUT ME</span>
				</v-btn>
				<v-btn href="/#experiences" text class="white--text mr-5">
					<span>EXPERIENCES</span>
				</v-btn>
				<v-btn href="/#contact" text class="white--text mr-5">
					<span>CONTACT</span>
				</v-btn>
			</template>
			<template v-else>
				<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			</template>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			dark
			:color="primaryColor"
			right
			temporary
		>
			<v-list nav>
				<v-list-item-group
					v-model="group"
					actvie-class="amber--text text--accent-4"
				>
					<v-list-item href="#about">
						<v-list-item-title>ABOUT ME</v-list-item-title>
					</v-list-item>
					<v-list-item href="#experiences">
						<v-list-item-title>EXPERIENCES</v-list-item-title>
					</v-list-item>
					<v-list-item href="#contact">
						<v-list-item-title>CONTACT</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-main style="overflow-x: hidden">
			<v-btn
				:color="primaryColor"
				raised
				dark
				fab
				fixed
				right
				bottom
				style="margin-bottom: 30px"
				@click="$vuetify.goTo(0)"
			>
				<v-icon>mdi-arrow-up</v-icon>
			</v-btn>
			<section id="hero" style="overflow-x: hidden">
				<v-row class="pa-5 pa-sm-10" no-gutters style="overflow: hidden">
					<v-col
						v-if="$vuetify.breakpoint.smAndUp"
						cols="12"
						sm="6"
						class="d-flex flex-column justify-center justify-sm-start"
						dark
					>
						<transition apear name="slideY-fade" tag="div">
							<span
								v-if="isInit"
								class="text-h5 text-sm-h3 font-weight-light white--text mt-sm-auto"
							>
								HELLO,
							</span>
						</transition>
						<transition apear name="slideY-fade" tag="div">
							<span
								v-if="isInit"
								class="text-h3 text-sm-h1 font-weight-black white--text mb"
							>
								I'm Ji Woong
							</span>
						</transition>
						<!-- </div> -->
						<!-- <div class="mx-auto mt-auto"> -->
						<transition apear name="slideY-fade-reverse" tag="div">
							<v-btn
								v-if="isInit"
								class="align-self-end mx-auto mt-sm-auto"
								fab
								outlined
								color="white"
								@click="$vuetify.goTo('#about')"
							>
								<v-icon>mdi-chevron-double-down</v-icon>
							</v-btn>
						</transition>
						<!-- </div> -->
					</v-col>
					<v-col cols="12" sm="6" class="img-area">
						<v-card color="white" :class="{ 'img-wrapper': isInit }" tile flat>
							<v-img contain class="main-img" src="./assets/me-2.png" />
						</v-card>
						<div
							v-if="$vuetify.breakpoint.xsOnly"
							class="mobile-text-area d-flex flex-column justify-space-between"
						>
							<h1 class="text-h5">HELLO,</h1>
							<h1 class="text-h3 font-weight-bold mb-3">I'm Ji Woong</h1>
							<v-btn
								v-if="isInit"
								class="justify-center mx-auto mb-n16"
								fab
								outlined
								color="white"
								@click="$vuetify.goTo('#about')"
							>
								<v-icon>mdi-chevron-double-down</v-icon>
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</section>

			<section id="about" style="overflow-x: hidden">
				<div class="py-12"></div>

				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

					<v-responsive class="mx-auto mb-8" width="56">
						<v-divider class="mb-1"></v-divider>

						<v-divider></v-divider>
					</v-responsive>

					<v-responsive
						class="mx-auto title font-weight-light mb-8"
						max-width="800"
					>
						Hi, I'm Jiwoong(Alex) Kim.<br />
						I studied <strong class="amber--text">MicroBiology</strong> back in
						my university(Choongbuk National Unv., South Korea).<br />
						Currently I am working in Quality Control team of OB Beer
						Company(family of AB InBev.).<br />
						Based on my knowledge in Microbioloy,<br />
						I work for the best quality of beer in the world.<br />
						I like playing soccer when I am free.
					</v-responsive>

					<v-avatar class="elevation-12 mb-12" size="128">
						<v-img src="./assets/about-me.png"></v-img>
					</v-avatar>

					<div></div>

					<v-btn color="grey" href="" outlined large>
						<span class="grey--text text--darken-1 font-weight-bold">
							My Resume
						</span>
					</v-btn>
				</v-container>

				<div class="py-12"></div>
			</section>

			<section id="skills" class="grey lighten-3" style="overflow-x: hidden">
				<div class="py-12"></div>

				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold mb-3">SKILLS</h2>

					<v-responsive class="mx-auto mb-12" width="56">
						<v-divider class="mb-1"></v-divider>

						<v-divider></v-divider>
					</v-responsive>

					<v-row>
						<v-col
							v-for="({ icon, title, text }, i) in features"
							:key="i"
							cols="12"
							md="4"
						>
							<v-card class="py-12 px-4" color="grey lighten-5" flat>
								<v-theme-provider dark>
									<div>
										<v-avatar color="primary" size="88">
											<v-icon large v-text="icon"></v-icon>
										</v-avatar>
									</div>
								</v-theme-provider>

								<v-card-title
									class="justify-center font-weight-black text-uppercase text-justify"
									style="word-break: keep-all"
									v-text="title"
								></v-card-title>

								<v-card-text class="subtitle-1" v-text="text"> </v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-container>

				<div class="py-12"></div>
			</section>

			<section id="experiences" style="overflow-x: hidden">
				<div class="py-12"></div>

				<v-container>
					<h2
						class="display-2 font-weight-bold mb-3 text-uppercase text-center"
					>
						EXPERIENCES
					</h2>

					<v-responsive class="mx-auto mb-12" width="56">
						<v-divider class="mb-1"></v-divider>
						<v-divider></v-divider>
					</v-responsive>

					<v-row class="mx-auto">
						<v-col colse="12">
							<v-list flat disabled three-line subheader>
								<!-- <v-subheader>REPORTS</v-subheader> -->
								<v-list-item-group v-model="experiences" color="primary">
									<v-list-item v-for="(experience, i) in experiences" :key="i">
										<v-list-item-icon>
											<v-icon v-if="i === 0" color="amber">mdi-check</v-icon>
											<v-icon v-else>mdi-check</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title
												class="font-weight-medium flex-wrap text-wrap"
												v-text="experience.title"
											></v-list-item-title>
											<v-list-item-subtitle
												v-text="experience.subtitle"
											></v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-col>
					</v-row>
				</v-container>

				<div class="py-12"></div>
			</section>

			<v-sheet
				id="contact"
				color="#333333"
				dark
				tag="section"
				tile
				style="overflow-x: hidden"
			>
				<!-- <v-parallax
					:height="$vuetify.breakpoint.smAndDown ? 1300 : 800"
					src="./assets/with-beers.png"
				> -->
				<div class="py-12"></div>

				<v-container>
					<h2
						class="display-2 font-weight-bold mb-3 text-uppercase text-center"
					>
						Contact Me
					</h2>

					<v-responsive class="mx-auto mb-12" width="56">
						<v-divider class="mb-1"></v-divider>

						<v-divider></v-divider>
					</v-responsive>

					<v-theme-provider light>
						<v-row>
							<v-col cols="12">
								<v-text-field
									v-model="email.from_name"
									flat
									label="Name*"
									solo
								></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field
									v-model="email.from"
									flat
									label="Email*"
									solo
								></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field
									v-model="email.subject"
									flat
									label="Subject*"
									solo
								></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-textarea
									v-model="email.text"
									flat
									label="Message*"
									solo
								></v-textarea>
							</v-col>

							<v-col class="mx-auto" cols="auto">
								<v-btn
									:color="isSending ? 'grey lighten-2' : 'accent'"
									x-large
									@click="sendMail()"
								>
									<v-progress-circular
										v-if="isSending"
										:size="50"
										:color="primaryColor"
										indeterminate
									></v-progress-circular>
									<span v-else>Submit</span>
								</v-btn>
							</v-col>
						</v-row>
					</v-theme-provider>
				</v-container>

				<div class="py-12"></div>
				<!-- </v-parallax> -->
			</v-sheet>

			<v-snackbar
				v-model="snackbar"
				timeout="5000"
				:color="emailSent ? 'amber' : 'red'"
				dark
			>
				{{ emailSent ? '발송되었습니다.' : '메일 발송 실패...!' }}
				<v-icon></v-icon>
				<template v-slot:action="{ attrs }">
					<v-btn text v-bind="attrs" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
		</v-main>

		<v-footer class="justify-center" color="#292929" height="100">
			<div
				class="title font-weight-light grey--text text--lighten-1 text-center"
			>
				Made with 💜 by Julia Jung
			</div>
		</v-footer>
	</v-app>
</template>

<script>
import Vue from 'vue';
import emailjs from 'emailjs-com';

export default Vue.extend({
	name: 'App',
	data: () => ({
		isInit: false,
		primaryColor: '#021254',
		drawer: false,
		group: null,
		snackbar: false,
		emailSent: false,
		isSending: false,
		features: [
			{
				icon: 'mdi-account-tie-voice',
				title: 'Confident in speaking English',
				text:
					'From my experience living in Aus for 2 years, I became confident in speaking English.',
			},
			{
				icon: 'mdi-presentation',
				title: 'Great Presentation Skill',
				text:
					'I have great presentation skill which is one of my strength at work.',
			},
			{
				icon: 'mdi-account-group',
				title: 'A very sociable',
				text:
					'I am very sociable and has great interpersonnal relationship with people. I am easy-going and mostly get along very well my co-workers.',
			},
		],
		item: 1,
		experiences: [
			{
				title:
					'Work in Quality Control Team of OB Beer Company(subsidiary of AB InBev.)',
				subtitle: '2019.06 ~ (Now)',
			},
			{
				title:
					"Graduate from Choongbuk National Unv. (a Bachelor's degree of Microbiology)",
				subtitle: '2019.02.',
			},
			{
				title: 'Working Holiday in Australia(Sydney, Melbourne, Perth)',
				subtitle: '2016.06 ~ 2018.06',
			},
		],
		email: {
			// eslint-disable-next-line @typescript-eslint/camelcase
			from_name: '',
			from: '',
			subject: '',
			text: '',
		},
	}),

	mounted() {
		this.isInit = true;
	},
	watch: {
		group() {
			this.drawer = false;
		},
	},

	methods: {
		async sendMail() {
			try {
				this.isSending = true;
				emailjs.init('user_EY3wMYdJlCccjMlPkZuEV');
				await emailjs.send(
					'gmail_testing_service',
					'template_eki39t9',
					this.email,
				);
				this.emailSent = true;
				this.snackbar = true;
			} catch (err) {
				console.log(err);
				this.emailSent = false;
				this.snackbar = true;
			}
			this.isSending = false;
			this.resetEmail();
		},
		resetEmail() {
			this.email = {
				// eslint-disable-next-line @typescript-eslint/camelcase
				from_name: '',
				from: '',
				subject: '',
				text: '',
			};
		},
	},
});
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Yellowtail&family=Nothing+You+Could+Do&display=swap')

.brand-text
	font-size: 30px
	font-family: 'Nothing You Could Do'
#hero
	background: #021254
	.img-area
		position: relative
		// padding: 50px
		.img-wrapper
			transform: rotate(-25deg)
			transition: 0.8s all ease-out
			.main-img
				transform: rotate(25deg)
	.mobile-text-area
		position: absolute
		bottom: 0
		left: 0
		color: white
		width: 100%
		padding: 10px 10px 70px 10px
		z-index: 1
		left: 0

.slideY-fade-enter
	opacity: 0
	transform: translateY(50%)
.slideY-fade-enter-active
	transition: all 0.8s ease-out
.slideY-fade-reverse-enter
	opacity: 0
	transform: translateY(-50%)
.slideY-fade-reverse-enter-active
	transition: all 0.8s ease-out
</style>
