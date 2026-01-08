import BlogDetailCard from "../components/blogs/BlogDetailCard";

export default function BlogDetail() {
  const dummyBlog = {
    title: "Why Use a 3D Sofa Configurator?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam maxime delectus vel. Reprehenderit saepe placeat blanditiis temporibus et vero rerum voluptate ipsum dicta sunt sapiente voluptatibus atque dolorem, aliquid velit aut soluta repellendus aperiam cupiditate natus? Soluta delectus sint ex recusandae quam autem, rem pariatur et quo perspiciatis placeat. Eos qui iste, laborum incidunt debitis commodi sint recusandae rerum enim vero magni necessitatibus expedita minima obcaecati vel, sequi sunt aut! Non, corporis dicta placeat inventore necessitatibus debitis odio modi, id aspernatur corrupti rerum nihil culpa soluta dolor aut qui asperiores ad animi enim! Possimus deserunt animi magnam? Eum a, tempora sit deleniti maxime praesentium placeat at eveniet neque quisquam fuga error facilis ipsa ut ratione in dolorem. Eius minima voluptatum iure, aperiam earum odit optio consequatur. Alias vitae atque, itaque veritatis temporibus natus ipsam, iusto ex ratione vero praesentium amet, esse facere corrupti maxime! Veniam ipsa facere itaque dolores accusamus ea tenetur odio corrupti totam doloremque placeat nobis, fugit repudiandae quis consequuntur vel necessitatibus aliquam minima architecto, maiores sit quasi? Sint libero optio iure officiis unde fugiat error officia laboriosam ea neque aliquam odio at, assumenda quo explicabo adipisci sunt laborum nisi? Sed voluptas totam incidunt delectus saepe itaque id aliquid distinctio omnis dolores magni, possimus non ratione quos illum animi eligendi laudantium dolorum aperiam soluta optio, asperiores quod iure illo? Commodi accusamus esse deserunt voluptas quidem, officiis amet facilis? Nobis, consequatur praesentium culpa dolorem qui beatae odio, esse totam ducimus eligendi maxime vel eaque. Quibusdam, nam vitae. Earum repudiandae non ratione sequi porro magnam eum nemo pariatur natus aspernatur est quam excepturi commodi suscipit distinctio, voluptatem deleniti aliquid expedita ullam quis voluptatibus repellendus debitis laborum? Suscipit quibusdam repellendus facere, consequuntur dolore ex. Veniam, quae dignissimos. Voluptas repellendus rem perspiciatis alias natus iste delectus quaerat explicabo error consequuntur eveniet fuga voluptatibus nobis harum sint omnis, recusandae dolor voluptatum obcaecati aut non? Architecto voluptas consequuntur tempore, officiis exercitationem sint nisi odio odit magnam excepturi. Numquam temporibus debitis distinctio assumenda sint fugiat hic, corrupti aliquid laboriosam. Sint incidunt pariatur ducimus labore aliquam tenetur consequatur distinctio adipisci minus quisquam nulla eum sequi beatae autem quis modi dolore illum natus dignissimos reprehenderit quae officia, molestiae rerum esse. Dolore, exercitationem. Minus nulla neque qui aliquam ipsum, incidunt quia hic cum esse inventore iure quisquam in quaerat suscipit, excepturi a optio fugit repudiandae consequatur iste. Nostrum, maxime obcaecati non quae perspiciatis eum reprehenderit repellendus voluptatem dignissimos eius doloribus deserunt, neque totam odio? Saepe natus quo ea aliquam voluptatibus? Veritatis odit nostrum voluptas ullam unde! Hic quaerat a accusantium animi at nulla eius fugit asperiores aut facere. Autem dolorum asperiores quis voluptas modi. Est saepe accusantium eveniet harum. Iste provident nisi nostrum amet expedita, cumque repudiandae incidunt alias quia explicabo repellendus impedit? Eius asperiores, necessitatibus laborum, alias est neque similique quisquam assumenda porro, facilis sunt? Blanditiis, sit quod. Velit iure quisquam fuga accusantium aliquid",
    image : "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: { name: "Atharva tamta" },
    createdAt: "2025-01-07",
  };

  return (
    <>
      {/* Hero Image */}
      <div className="h-[420px] w-full overflow-hidden">
        <img
          src={dummyBlog.image}
          alt={dummyBlog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Card */}
      <BlogDetailCard
        title={dummyBlog.title}
        content={dummyBlog.content}
        author={dummyBlog.author.name}
        date={new Date(dummyBlog.createdAt).toDateString()}
      />
    </>
  );
}
