import { IBaseModel } from '../typedef/IBaseModel';

export interface IWorkLog extends IBaseModel {
    id: string
    description: string,
    staff: string,
    projectName: string,
    date: Date,
    phaseName: string
    task: string
    from: string,
    to: string
}
export interface IWorkLogCreate { }

export const mockData = [{
    "id": 1,
    "name": "Eugine",
    "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "staff": "ejohns0@cargocollective.com",
    "projectName": "Overhold",
    "phaseName": "Movies",
    "task": "Tools",
    "from": "8:32",
    "to": "11:13",
    "status": true
}, {
    "id": 2,
    "name": "Jasmin",
    "description": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    "staff": "jdudek1@rediff.com",
    "projectName": "Rank",
    "phaseName": "Games",
    "task": "Outdoors",
    "from": "16:51",
    "to": "2:42",
    "status": false
}, {
    "id": 3,
    "name": "Kayley",
    "description": "Morbi porttitor lorem id ligula.",
    "staff": "kganderton2@youtu.be",
    "projectName": "Greenlam",
    "phaseName": "Industrial",
    "task": "Grocery",
    "from": "15:36",
    "to": "2:54",
    "status": false
}, {
    "id": 4,
    "name": "Pall",
    "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "staff": "pcudde3@ustream.tv",
    "projectName": "Vagram",
    "phaseName": "Music",
    "task": "Clothing",
    "from": "13:36",
    "to": "23:02",
    "status": true
}, {
    "id": 5,
    "name": "Merlina",
    "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    "staff": "mhalbeard4@ft.com",
    "projectName": "Flexidy",
    "phaseName": "Music",
    "task": "Industrial",
    "from": "18:24",
    "to": "8:19",
    "status": false
}, {
    "id": 6,
    "name": "Nert",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    "staff": "nbartholat5@craigslist.org",
    "projectName": "Bitwolf",
    "phaseName": "Grocery",
    "task": "Toys",
    "from": "14:33",
    "to": "21:07",
    "status": false
}, {
    "id": 7,
    "name": "Anthea",
    "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "staff": "amcconnell6@europa.eu",
    "projectName": "Tampflex",
    "phaseName": "Movies",
    "task": "Clothing",
    "from": "10:32",
    "to": "1:00",
    "status": true
}, {
    "id": 8,
    "name": "Selena",
    "description": "Nullam varius.",
    "staff": "skitman7@nature.com",
    "projectName": "Latlux",
    "phaseName": "Sports",
    "task": "Games",
    "from": "17:20",
    "to": "1:36",
    "status": true
}, {
    "id": 9,
    "name": "Cherish",
    "description": "Nulla mollis molestie lorem. Quisque ut erat.",
    "staff": "cfocke8@joomla.org",
    "projectName": "Zaam-Dox",
    "phaseName": "Outdoors",
    "task": "Home",
    "from": "7:28",
    "to": "13:47",
    "status": false
}, {
    "id": 10,
    "name": "Lyndsey",
    "description": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "staff": "ldeluna9@hud.gov",
    "projectName": "Daltfresh",
    "phaseName": "Home",
    "task": "Toys",
    "from": "14:41",
    "to": "8:44",
    "status": true
}, {
    "id": 11,
    "name": "Amanda",
    "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "staff": "atyrwhitta@com.com",
    "projectName": "Hatity",
    "phaseName": "Industrial",
    "task": "Industrial",
    "from": "1:21",
    "to": "16:43",
    "status": true
}, {
    "id": 12,
    "name": "Mickey",
    "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    "staff": "mbamberyb@wisc.edu",
    "projectName": "Y-find",
    "phaseName": "Games",
    "task": "Movies",
    "from": "2:32",
    "to": "8:21",
    "status": false
}, {
    "id": 13,
    "name": "Beret",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    "staff": "bcreaghc@hugedomains.com",
    "projectName": "Alpha",
    "phaseName": "Garden",
    "task": "Grocery",
    "from": "17:24",
    "to": "10:11",
    "status": false
}, {
    "id": 14,
    "name": "Fraser",
    "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    "staff": "fcadored@quantcast.com",
    "projectName": "Konklab",
    "phaseName": "Baby",
    "task": "Baby",
    "from": "17:59",
    "to": "11:20",
    "status": true
}, {
    "id": 15,
    "name": "Kelsey",
    "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "staff": "kuppette@bandcamp.com",
    "projectName": "Sonair",
    "phaseName": "Home",
    "task": "Automotive",
    "from": "17:09",
    "to": "13:55",
    "status": false
}, {
    "id": 16,
    "name": "Nettle",
    "description": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "staff": "njanczykf@oaic.gov.au",
    "projectName": "Hatity",
    "phaseName": "Sports",
    "task": "Shoes",
    "from": "20:14",
    "to": "23:17",
    "status": true
}, {
    "id": 17,
    "name": "Morgen",
    "description": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    "staff": "mracineg@ftc.gov",
    "projectName": "Ventosanzap",
    "phaseName": "Beauty",
    "task": "Beauty",
    "from": "12:47",
    "to": "14:57",
    "status": true
}, {
    "id": 18,
    "name": "Ollie",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    "staff": "orapleyh@nydailynews.com",
    "projectName": "Quo Lux",
    "phaseName": "Home",
    "task": "Home",
    "from": "18:20",
    "to": "21:31",
    "status": false
}, {
    "id": 19,
    "name": "Rafaelia",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    "staff": "rdecorti@flickr.com",
    "projectName": "Matsoft",
    "phaseName": "Home",
    "task": "Home",
    "from": "23:05",
    "to": "7:58",
    "status": true
}, {
    "id": 20,
    "name": "Dalt",
    "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "staff": "dgauchj@myspace.com",
    "projectName": "Job",
    "phaseName": "Industrial",
    "task": "Garden",
    "from": "23:29",
    "to": "13:47",
    "status": false
}, {
    "id": 21,
    "name": "Oliviero",
    "description": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "staff": "oglasmank@shop-pro.jp",
    "projectName": "Trippledex",
    "phaseName": "Home",
    "task": "Baby",
    "from": "2:15",
    "to": "14:47",
    "status": false
}, {
    "id": 22,
    "name": "Flint",
    "description": "Sed ante.",
    "staff": "flearmanl@topsy.com",
    "projectName": "Y-find",
    "phaseName": "Music",
    "task": "Tools",
    "from": "21:32",
    "to": "2:01",
    "status": false
}, {
    "id": 23,
    "name": "Charita",
    "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "staff": "cmingetm@jimdo.com",
    "projectName": "Viva",
    "phaseName": "Home",
    "task": "Grocery",
    "from": "0:57",
    "to": "14:36",
    "status": true
}, {
    "id": 24,
    "name": "Ulrike",
    "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "staff": "uwilgarn@japanpost.jp",
    "projectName": "Domainer",
    "phaseName": "Beauty",
    "task": "Music",
    "from": "1:29",
    "to": "6:16",
    "status": true
}, {
    "id": 25,
    "name": "Amargo",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "staff": "asommerlando@washingtonpost.com",
    "projectName": "Stronghold",
    "phaseName": "Computers",
    "task": "Kids",
    "from": "12:07",
    "to": "23:44",
    "status": true
}, {
    "id": 26,
    "name": "Rania",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "staff": "rcharlesworthp@aboutads.info",
    "projectName": "Treeflex",
    "phaseName": "Automotive",
    "task": "Electronics",
    "from": "14:38",
    "to": "7:53",
    "status": true
}]