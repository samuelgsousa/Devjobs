import {Injectable } from '@angular/core';
import { Vagapreview } from './vagapreview';


@Injectable({
  providedIn: 'root',
  
})
export class VagaService {
    url = 'http://localhost:3000/locations';

   protected vagaPreviewList: Vagapreview[] = [
//     {
//         "id": 1,
//         "nome_empresa": "Marketing S&A",
//         "logo": "NULL",
//         "data_pub": new Date('2024-03-12'),
//         "cargo": "Desenvolvedor Full Stack",
//         "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id magnam blanditiis dolor rerum earum fuga, nulla accusantium est. Consequuntur a minima, architecto unde praesentium eos cum velit vel nihil fugiat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eius tempora suscipit autem earum quasi rem omnis, inventore iure aperiam saepe ratione iste architecto illum deserunt similique dolores voluptatibus voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut nisi error doloribus! Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis. Aliquid delectus blanditiis accusantium reprehenderit. Eum ea cupiditate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et!",
//         "localidade": "Salvador, Bahia",
//         "tipo": "Período Integral",
//         "requisitos": [
//             {
//                 "id": "2",
//                 "vaga_id": "1",
//                 "requisito": "Ensino Superior Completo"
//             },
//             {
//                 "id": "3",
//                 "vaga_id": "1",
//                 "requisito": "Inglês Fluente"
//             },
//             {
//                 "id": "4",
//                 "vaga_id": "1",
//                 "requisito": "Conhecimento em JavaScript"
//             },
//             {
//                 "id": "5",
//                 "vaga_id": "1",
//                 "requisito": "Experiência com HTML, CSS e JavaScript"
//             },
//             {
//                 "id": "6",
//                 "vaga_id": "1",
//                 "requisito": "Conhecimento em frameworks de frontend"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "nome_empresa": "Pashion 4 Fashion",
//         "logo": "NULL",
//         "data_pub": new Date("2024-04-15"),
//         "cargo": "Desenvolvedor Frontend",
//         "descricao": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Consequuntur a minima, architecto unde praesentium eos cum velit vel nihil fugiat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eius tempora suscipit autem earum quasi rem omnis, inventore iure aperiam saepe ratione iste architecto illum deserunt similique dolores voluptatibus voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut nisi error doloribus! Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis. Aliquid delectus blanditiis accusantium reprehenderit. Eum ea cupiditate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.",
//         "localidade": "São Paulo, Brasil",
//         "tipo": "Temporário",
//         "requisitos": [
//             {
//                 "id": "7",
//                 "vaga_id": "2",
//                 "requisito": "Experiência com Node.js e Express"
//             },
//             {
//                 "id": "8",
//                 "vaga_id": "2",
//                 "requisito": "Conhecimento em bancos de dados relacionais"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "nome_empresa": "MoneyBank",
//         "logo": "NULL",
//         "data_pub": new Date("2024-03-25"),
//         "cargo": "Desenvolvedor Backend",
//         "descricao": "Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.",
//         "localidade": "Nova York, EUA",
//         "tipo": "Contrato",
//         "requisitos": [
//             {
//                 "id": "9",
//                 "vaga_id": "3",
//                 "requisito": "Experiência com linguagens de programação como Java ou C#"
//             },
//             {
//                 "id": "10",
//                 "vaga_id": "3",
//                 "requisito": "Conhecimento em arquitetura de software"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "nome_empresa": "Tech Solutions Ltda",
//         "logo": "NULL",
//         "data_pub": new Date("2024-02-10"),
//         "cargo": "Engenheiro de Software",
//         "descricao": "Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Londres, Reino Unido",
//         "tipo": "Estágio",
//         "requisitos": [
//             {
//                 "id": "11",
//                 "vaga_id": "4",
//                 "requisito": "Experiência com desenvolvimento full stack"
//             },
//             {
//                 "id": "12",
//                 "vaga_id": "4",
//                 "requisito": "Conhecimento em frameworks de backend"
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "nome_empresa": "WebMaster Inc",
//         "logo": "NULL",
//         "data_pub": new Date("2024-01-05"),
//         "cargo": "Desenvolvedor Full Stack",
//         "descricao": "Cras convallis, ipsum nec fermentum iaculis, libero nunc fermentum elit, at mattis neque sapien eu justo. Ut dictum libero in eros malesuada, vitae dapibus risus feugiat. Sed sagittis turpis nec diam facilisis, non sodales nulla rutrum. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur. ",
//         "localidade": "Tóquio, Japão",
//         "tipo": "Freelancer",
//         "requisitos": [
//             {
//                 "id": "13",
//                 "vaga_id": "5",
//                 "requisito": "Experiência em testes de software"
//             },
//             {
//                 "id": "14",
//                 "vaga_id": "5",
//                 "requisito": "Conhecimento em metodologias ágeis"
//             }
//         ]
//     },
//     {
//         "id": 6,
//         "nome_empresa": "Digital Innovations SA",
//         "logo": "NULL",
//         "data_pub": new Date("2024-04-01"),
//         "cargo": "Analista de Qualidade de Software",
//         "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros.  Nobis ut nisi error doloribus! Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis. Aliquid delectus blanditiis accusantium reprehenderit. Eum ea cupiditate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec Nobis ut nisi error doloribus! Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis. Aliquid delectus blanditiis accusantium reprehenderit. Eum ea cupiditate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec Nobis ut nisi error doloribus! Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis. Aliquid delectus blanditiis accusantium reprehenderit. Eum ea cupiditate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec",
//         "localidade": "Berlim, Alemanha",
//         "tipo": "Período Integral",
//         "requisitos": [
//             {
//                 "id": "15",
//                 "vaga_id": "6",
//                 "requisito": "Experiência em design de software"
//             },
//             {
//                 "id": "16",
//                 "vaga_id": "6",
//                 "requisito": "Conhecimento em padrões de projeto"
//             }
//         ]
//     },
//     {
//         "id": 7,
//         "nome_empresa": "CodeCrafters Ltda",
//         "logo": "NULL",
//         "data_pub": new Date("2024-03-12"),
//         "cargo": "Arquiteto de Software",
//         "descricao": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante.",
//         "localidade": "Toronto, Canadá",
//         "tipo": "Temporário",
//         "requisitos": [
//             {
//                 "id": "17",
//                 "vaga_id": "7",
//                 "requisito": "Experiência com desenvolvimento mobile"
//             },
//             {
//                 "id": "18",
//                 "vaga_id": "7",
//                 "requisito": "Conhecimento em linguagens como Swift ou Kotlin"
//             }
//         ]
//     },
//     {
//         "id": 8,
//         "nome_empresa": "CyberTech Solutions",
//         "logo": "NULL",
//         "data_pub": new Date("2024-02-20"),
//         "cargo": "Desenvolvedor Mobile",
//         "descricao": "Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Sydney, Austrália",
//         "tipo": "Contrato",
//         "requisitos": [
//             {
//                 "id": "19",
//                 "vaga_id": "8",
//                 "requisito": "Experiência em processamento de grandes volumes de dados"
//             },
//             {
//                 "id": "20",
//                 "vaga_id": "8",
//                 "requisito": "Conhecimento em ferramentas de Big Data"
//             }
//         ]
//     },
//     {
//         "id": 9,
//         "nome_empresa": "DataDriven Solutions Inc",
//         "logo": "NULL",
//         "data_pub": new Date("2024-01-30"),
//         "cargo": "Engenheiro de Dados",
//         "descricao": "Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Paris, França",
//         "tipo": "Estágio",
//         "requisitos": [
//             {
//                 "id": "21",
//                 "vaga_id": "9",
//                 "requisito": "Experiência em segurança da informação"
//             },
//             {
//                 "id": "22",
//                 "vaga_id": "9",
//                 "requisito": "Certificações em segurança da informação são um diferencial"
//             }
//         ]
//     },
//     {
//         "id": 10,
//         "nome_empresa": "CloudNine Technologies",
//         "logo": "NULL",
//         "data_pub": new Date("2024-04-08"),
//         "cargo": "Analista de Segurança da Informação",
//         "descricao": "Cras convallis, ipsum nec fermentum iaculis, libero nunc fermentum elit, at mattis neque sapien eu justo. Ut dictum libero in eros malesuada, vitae dapibus risus feugiat. Sed sagittis turpis nec diam facilisis, non sodales nulla rutrum. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Cidade do México, México",
//         "tipo": "Freelancer",
//         "requisitos": [
//             {
//                 "id": "23",
//                 "vaga_id": "10",
//                 "requisito": "Experiência como facilitador de processos ágeis"
//             },
//             {
//                 "id": "24",
//                 "vaga_id": "10",
//                 "requisito": "Certificação Scrum Master"
//             }
//         ]
//     },
//     {
//         "id": 11,
//         "nome_empresa": "ByteWorks Ltda",
//         "logo": "NULL",
//         "data_pub": new Date("2024-03-17"),
//         "cargo": "Scrum Master",
//         "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Madri, Espanha",
//         "tipo": "Período Integral",
//         "requisitos": [
//             {
//                 "id": "25",
//                 "vaga_id": "11",
//                 "requisito": "Experiência em desenvolvimento de jogos"
//             },
//             {
//                 "id": "26",
//                 "vaga_id": "11",
//                 "requisito": "Conhecimento em engines de jogos"
//             }
//         ]
//     },
//     {
//         "id": 12,
//         "nome_empresa": "InnovateTech Corporation",
//         "logo": "NULL",
//         "data_pub": new Date("2024-02-22"),
//         "cargo": "Desenvolvedor de Jogos",
//         "descricao": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Seul, Coreia do Sul",
//         "tipo": "Temporário",
//         "requisitos": [
//             {
//                 "id": "27",
//                 "vaga_id": "12",
//                 "requisito": "Experiência em redes de computadores"
//             },
//             {
//                 "id": "28",
//                 "vaga_id": "12",
//                 "requisito": "Certificações de redes são um diferencial"
//             }
//         ]
//     },
//     {
//         "id": 13,
//         "nome_empresa": "CodeNinjas Inc",
//         "logo": "NULL",
//         "data_pub": new Date("2024-01-10"),
//         "cargo": "Engenheiro de Redes",
//         "descricao": "Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Roma, Itália",
//         "tipo": "Contrato",
//         "requisitos": [
//             {
//                 "id": "29",
//                 "vaga_id": "13",
//                 "requisito": "Experiência em análise de dados"
//             },
//             {
//                 "id": "30",
//                 "vaga_id": "13",
//                 "requisito": "Conhecimento em ferramentas de BI"
//             }
//         ]
//     },
//     {
//         "id": 14,
//         "nome_empresa": "WebWizards Ltda",
//         "logo": "NULL",
//         "data_pub": new Date("2024-04-03"),
//         "cargo": "Analista de Dados",
//         "descricao": "Suspendisse potenti. Vivamus fring lla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Cidade do Cabo, África do Sul",
//         "tipo": "Estágio",
//         "requisitos": [
//             {
//                 "id": "31",
//                 "vaga_id": "14",
//                 "requisito": "Experiência em design de interfaces de usuário"
//             },
//             {
//                 "id": "32",
//                 "vaga_id": "14",
//                 "requisito": "Conhecimento em ferramentas de prototipagem"
//             }
//         ]
//     },
//     {
//         "id": 15,
//         "nome_empresa": "FutureTech Innovations SA",
//         "logo": "NULL",
//         "data_pub": new Date("2024-03-19"),
//         "cargo": "UI/UX Designer",
//         "descricao": "Cras convallis, iiipsum nec fermentum iaculis, libero nunc fermentum elit, at mattis neque sapien eu justo. Ut dictum libero in eros malesuada, vitae dapibus risus feugiat. Sed sagittis turpis nec diam facilisis, non sodales nulla rutrum. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Rio de Janeiro, Brasil",
//         "tipo": "Freelancer",
//         "requisitos": [
//             {
//                 "id": "33",
//                 "vaga_id": "15",
//                 "requisito": "Experiência em sistemas embarcados"
//             },
//             {
//                 "id": "34",
//                 "vaga_id": "15",
//                 "requisito": "Conhecimento em eletrônica embarcada"
//             }
//         ]
//     },
//     {
//         "id": 16,
//         "nome_empresa": "DataSavvy Solutions Inc",
//         "logo": "NULL",
//         "data_pub": new Date("2024-02-28"),
//         "cargo": "Desenvolvedor de Sistemas Embarcados",
//         "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel nunc dictum tincidunt. Nam ac elit ac ligula fermentum tempor. Nullam auctor, nisl vel convallis efficitur, libero risus consequat nisi, id vestibulum eros magna ut eros. Suspendisse potenti. Vivamus fringilla arcu at sapien aliquet, at fringilla velit mollis. Curabitur ullamcorper lacus eget arcu pellentesque, vel commodo odio laoreet. Praesent eget dolor eu lacus efficitur commodo vel non ante. Fusce fermentum, est ut consectetur posuere, tortor urna ultrices eros, eget vehicula velit eros nec nisi. Mauris eget enim sit amet orci posuere lobortis. Morbi fermentum metus et felis feugiat, quis lobortis nunc consectetur.  Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec. Deserunt quia cum nemo animi veniam, ea harum distinctio eum, quo consequuntur doloribus beatae eveniet? Deleniti labore accusantium ex neque non dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint expedita assumenda quia, aperiam exercitationem ut quibusdam odit molestiae placeat aliquam aspernatur qui ipsam obcaecati iusto nostrum ipsum dignissimos et! Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel condimentum lectus. Sed vitae ex nec mauris tincidunt fermentum. Integer auctor vestibulum arcu, sit amet iaculis lacus vulputate nec.  Similique consequuntur est quo impedit fuga, accusamus inventore fugiat quas quam? Eius, dolorum? Dolorem dicta dolore sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo praesentium aliquid totam veritatis tempora eius dolores ab sint consectetur, animi omnis.",
//         "localidade": "Bangkok, Tailândia",
//         "tipo": "Período Integral",
//         "requisitos": [
//             {   "id": "35",
//                 "vaga_id": "16",
//                 "requisito": "Experiência em sistemas embarcados"}
//         ]
//     }
 ]

  async getAllVagas(): Promise<Vagapreview[]>{
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }

  async getVagaById(id: number): Promise<Vagapreview | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? {}
  }

  constructor() {

   }
}

// json-server --watch db.json