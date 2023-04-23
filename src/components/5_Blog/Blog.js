import Component1 from "../1_HomePage/Component1";
import BlogCard from "./BlogCard";
import logo from '../10_images/BlogImages.jpg';
function Blog() {
    return (
        <div class="bg-dark">
            <Component1 />
            <h3 class="text-light text-center">Check out my latest blog posts</h3>
            <h1 class="text-light text-center">My Blog</h1>
            <div class="row mx-5 my-4">
                <BlogCard logo={logo} date="23 Apr 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
                <BlogCard logo={logo} date="23 May 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
                <BlogCard logo={logo} date="23 Jun 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
                <BlogCard logo={logo} date="23 Jul 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
                <BlogCard logo={logo} date="23 Aug 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
                <BlogCard logo={logo} date="23 Sep 2023" title="Top tools for Photographers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."/>
            </div>
        </div>
    );
}
export default Blog;