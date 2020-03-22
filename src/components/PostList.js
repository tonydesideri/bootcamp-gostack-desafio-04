import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Tony Desideri",
          avatar: "https://avatars2.githubusercontent.com/u/25793180?s=460&u=a20b72821fabdddfe61f29ed6ed4782205abf423&v=4"
        },
        date: "21 Fev 2020",
        content: "Pessoal, criei essa primeira página usando reactjs com os conceitos básicos.",
        comments: [
          {
            id: 1,
            author: {
              name: "Luisa Vasconcelos",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content: "Parabéns Tony, tenho certeza que que você vai longe."
          },
          {
            id: 2,
            author: {
              name: "Marcos Nascimento",
              avatar: "https://i.pravatar.cc/150?img=68"
            },
            content: "É isso ai mano, sucesso para você!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Tony Desideri",
          avatar: "https://avatars2.githubusercontent.com/u/25793180?s=460&u=a20b72821fabdddfe61f29ed6ed4782205abf423&v=4"
        },
        date: "21 Fev 2020",
        content: "Galera, eu recomendo o bootcamp da Rocketseat, é muito bom. Estou aprendendo muita coisa com a stacke nodejs, reactjs e react  native",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "O bootcamp da Roacketseat é atualizado a todo instante e tenho certeza que vai longe com esse conhecimeto."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Fernanda Sousa",
          avatar: "https://i.pravatar.cc/150?img=16"
        },
        date: "21 Fev 2020",
        content: "O mundo seria um lugar melhor se...",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "As pessoas se importacem mais uma com as outras."
          },
          {
            id: 2,
            author: {
              name: "Tony Desideri",
              avatar: "https://avatars2.githubusercontent.com/u/25793180?s=460&u=a20b72821fabdddfe61f29ed6ed4782205abf423&v=4"
            },
            content: "Não tivesse fome, pessoas miseráveis."
          },
          {
            id: 3,
            author: {
              name: "João Dantas",
              avatar: "https://i.pravatar.cc/150?img=70"
            },
            content: "Não existisse desigualdade na sociedade."
          }
        ]
      }
    ]
  };

  render() {
    const posts = this.state.posts;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;