import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import Bio from '../components/Bio'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import styles from './post.module.scss'
import './prism-okaidia.css'

export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const date = postNode.fields.date
  if (!post.id) {
    post.id = slug
  }

  useEffect(() => {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin","anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "justinaus/blog-gatsby2");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute( "theme", "github-light");
    anchor.appendChild(script);
  }, []);

  return (
    <Layout>
      <main>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <h3>{post.desc}</h3>
          <p className={styles.postMeta}>
            {date} 
            {/* &mdash; {postNode.timeToRead} Min Read{' '} */}
          </p>
          <div className={styles.postMeta}>
            <PostTags tags={post.tags} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          
          <div id="inject-comments-for-uterances"></div>

          <hr />
          <Bio config={config} />
          {/* <div className={styles.postMeta}>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div> */}
        </div>
        {/* <nav>
          <ul className={styles.pagination}>
            <li>
              <Link to={prevslug} rel="prev">
                ← {prevtitle}
              </Link>
            </li>
            <li>
              <Link to={nextslug} rel="next">
                {nexttitle}→
              </Link>
            </li>
          </ul>
        </nav> */}
      </main>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
        desc
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
