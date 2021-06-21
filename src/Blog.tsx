import React from 'react';
import {useAuth} from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: 'https://www.technologyreview.com/2021/01/14/1016122/these-five-ai-developments-will-shape-2021-and-beyond/' },
  { title: 'Design', url: 'https://dailydesignews.com/' },
  { title: 'Culture', url: 'https://cookieandkate.com/roasted-butternut-squash-soup/' },
  { title: 'Business', url: 'https://www.fool.ca/2021/06/20/reddit-stocks-why-amc-and-cineplex-are-on-fire-right-now/' },
  { title: 'Politics', url: 'https://www.youtube.com/watch?v=HydDzVXMNBA' },
  { title: 'Opinion', url: 'https://www.ign.com/articles/6-developer-hot-takes' },
  { title: 'Science', url: 'https://phys.org/?gclid=CjwKCAjwzruGBhBAEiwAUqMR8GurS4wJijLgZdtWdwDnctMT-Vm3cMUxOuaLNhRmBaAMVYnJpYK-LBoCjQYQAvD_BwE' },
  { title: 'MMA', url: 'https://mmajunkie.usatoday.com/2021/06/recovering-from-his-own-leg-break-chris-weidman-offers-heartfelt-apology-to-anderson-silva' },
  { title: 'Video Games', url: 'https://www.gameinformer.com/' },
  { title: 'Travel', url: 'https://guidetoiceland.is/best-of-iceland/top-12-things-to-do-in-iceland' },
];

const mainFeaturedPost = {
  title: 'Conor Mcgregor to take on Dustion Poirier in RUBBER MATCH',
  description:
    "The fight all you fans have been waiting for MCRGEGOR VS POIRER III. Termoil is brewing, Mcgregor bails out on his promised half million charity donation towards Poirer's charity. Poirier says he's ready to put him down again, once and for all",
  image: 'https://cdni.rt.com/files/2021.01/article/600b102f2030270bf45fbe43.jpg',
};

const featuredPosts = [
  {
    title: 'Mcgregor',
    date: 'Nov 12',
    description:
      "Hear what's new with Conor Mcgregor",
    image: 'https://img.bleacherreport.net/img/images/photos/003/848/289/hi-res-8db997809fbb892e770e491ed00c6ae5_crop_exact.jpg?w=1200&h=1200&q=75',
    imageText: 'Image Text',
    url: 'https://www.mmamania.com/2021/4/27/22405864/ufc-conor-mcgregor-finally-coughs-up-500k-donation-not-dustin-poiriers-good-fight-mma'
  },
  {
    title: 'Poirer',
    date: 'Nov 11',
    description:
      "Hear what's new with Dustin Poirier",
    image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2021-01/Porier-Dustin_HERO_Updated-012621.png?null&h=d1cb525d&itok=r3P2fs1a',
    imageText: 'Image Text',
    url: 'https://mmajunkie.usatoday.com/2021/06/dustin-poiriers-boxing-coach-predicts-third-round-knockout-of-conor-mcgregor-at-ufc-264',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/lssjByron/reactfire' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/?lang=en' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/' },
  ],
};

/*
*Function: Blog
*Return: HTML
*About: The main page once logged in. Blog calls on other local components (ex. Header, MainFeaturedPost)
*to fill the main screen
*/
export default function Blog() {
  const classes = useStyles();
  const auth = useAuth();
  const btn = document.getElementById("loginBtn")!;
  btn.innerText  = "Logout";
  btn.onclick = async ()=> await auth.signOut();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Byron Roby's Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
