const axios = require('axios');

const { MongoClient, ObjectId } = require('mongodb');

const repository = require('./mongo');
const collection = 'movies';

const { makeFakeAnimal } = require('./fakes/movie');

const time = 10000;

const moviesMock = [
  {
    title: "The Private Lives of Pippa Lee",
    rate: 0,
    movieDirector: "Rebecca Miller",
    characters: "Robin Wright",
    category: "romance",
    urlTrailer: "url del trailer de la pelicula",
    urlImage: "/fVrYHI3YMPVk77DVdltDSxgL0Ew.jpg",
    plot: "The life you love may be your own.... The wife of a much older man finds herself attracted to their neighbour's son, who is closer to her age."
  }
  ,
  {
    title: "Godzilla: El planeta de los monstruos",
    rate: 100,
    movieDirector: "Hiroyuki Seshita, Kōbun Shizuno",
    characters: "Tomokazu Sugita",
    category: "Accion",
    urlTrailer: "url del trailer de la pelicula",
    urlImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/xFs3D8sRUgobpwwE46rt2pZHEgi.jpg",
    plot: "En un futuro los Kaijus lograrán conquistar la Tierra. La humanidad de..."
  }
];

describe('movie-world API', () => {
  beforeAll(() => {
    axios.defaults.baseURL = 'http://localhost:'+process.env.PORT;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.validateStatus = function (status) {
      // Throw only if the status code is greater than or equal to 500
      return status < 500;
    };
  });
  afterEach(async () => {
    return await repository.drop('movies');
  });

  describe('movie test', () => {

    it(
      'GET get all movies successfully',
      async () => {
        const movieOne = moviesMock[0];
        const movieTwo = moviesMock[1];
        const movies = [movieOne, movieTwo];
        await repository.createMany(collection, movies);
        const response = await axios.get('/getmovies/');
        const returnedData = response.data.data;
        const expectedValue = [movieOne, movieTwo];
        expect(response.status).toBe(200);
        expect(response.data.message).toBe('movies listed');

        expect(returnedData[0]._id).toMatch(/^[0-9a-fA-F]{24}$/);
        expect(returnedData[0].title).toBe(expectedValue[0].title);
        expect(returnedData[0].director).toBe(expectedValue[0].director);
        expect(returnedData[0].characters).toBe(expectedValue[0].characters);
        expect(returnedData[0].rate).toBe(expectedValue[0].rate);
        expect(returnedData[0].category).toBe(expectedValue[0].category);
        expect(returnedData[0].urlTrailer).toBe(expectedValue[0].urlTrailer);
        expect(returnedData[0].urlImage).toBe(expectedValue[0].urlImage);
        expect(returnedData[0].plot).toBe(expectedValue[0].plot);

        expect(returnedData[1]._id).toMatch(/^[0-9a-fA-F]{24}$/);
        expect(returnedData[1].title).toBe(expectedValue[1].title);
        expect(returnedData[1].director).toBe(expectedValue[1].director);
        expect(returnedData[1].characters).toBe(expectedValue[1].characters);
        expect(returnedData[1].rate).toBe(expectedValue[1].rate);
        expect(returnedData[1].category).toBe(expectedValue[1].category);
        expect(returnedData[1].urlTrailer).toBe(expectedValue[1].urlTrailer);
        expect(returnedData[1].urlImage).toBe(expectedValue[1].urlImage);
        expect(returnedData[1].plot).toBe(expectedValue[1].plot);
      },
      time
    );

    it(
      'GET get a movie by id successfully',
      async () => {
        const movie = moviesMock[1];
        const idCreated = await repository.create(collection, movie);
        const response = await axios.get('/getmovie/' + idCreated);
        const returnedData = response.data;
        expect(response.status).toBe(200);
        expect(returnedData.message).toBe('movie retrived');

        expect(returnedData[1]._id).toMatch(/^[0-9a-fA-F]{24}$/);
        expect(returnedData[1].title).toBe(expectedValue[1].title);
        expect(returnedData[1].director).toBe(expectedValue[1].director);
        expect(returnedData[1].characters).toBe(expectedValue[1].characters);
        expect(returnedData[1].rate).toBe(expectedValue[1].rate);
        expect(returnedData[1].category).toBe(expectedValue[1].category);
        expect(returnedData[1].urlTrailer).toBe(expectedValue[1].urlTrailer);
        expect(returnedData[1].urlImage).toBe(expectedValue[1].urlImage);
        expect(returnedData[1].plot).toBe(expectedValue[1].plot);
      },
      time
    );
  });
});