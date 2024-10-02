import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'
import concat from 'gulp-concat'
//import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import pug from 'gulp-pug'
import purgeCss from 'gulp-purgecss'
import cacheBust from 'gulp-cache-bust'
import {init as server, stream, reload} from 'browser-sync'
import plumber from 'gulp-plumber'

const funcPathJS = './src/script/funciones/';

let selectFuncJS = [ funcPathJS + 'menu.js',
							funcPathJS + 'loginEffect.js',
							funcPathJS + 'pestanhas.js',
							funcPathJS + 'login.js'
						];

gulp.task('vista', () => {
	return gulp.src('./src/views/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(cacheBust({
			type: 'timestamp'
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./dist'))
});

gulp.task('scss', () => {
	return gulp.src('./src/scss/*.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compressed',
			sourceComments: false
		}))
		.pipe(autoprefixer())
		.pipe(plumber.stop())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(stream())
});

/**
 * Tarea para limpiar el CSS de estilos innecesarios en el HTMLs
 */
gulp.task('purgaCss', () => {
	return gulp.src('./dist/css/estilo.css')
		.pipe(plumber())
		.pipe(purgeCss({
			content: ['./dist/*.html'],
			css: ['./css/*.css']
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest('./dist/css'))
})
/**
 *  FIN
 */


gulp.task('jsUnion', () => {
	return gulp.src(selectFuncJS)
		.pipe(plumber())
		.pipe(concat('main.min.js'))
		.pipe(babel())
		.pipe(terser())
		.pipe(plumber.stop())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('default', () => {
	server({
		server: './dist'
		//index: 'panel.html'
	})
	gulp.watch('./src/script/**/*.js', gulp.series('jsUnion')).on('change', reload)
	gulp.watch('./src/views/**/*.pug', gulp.series('vista')).on('change', reload)
	gulp.watch('./src/scss/**/*.scss', gulp.series('scss'))
	
})