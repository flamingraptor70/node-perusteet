// mock data for assignment, could be placed to separate json-file too.
const mediaItems = [
  {
    media_id: 9632,
    filename: "ffd8.jpg",
    filesize: 887574,
    title: "Favorite drink",
    description: "",
    user_id: 1606,
    media_type: "image/jpeg",
    created_at: "2023-10-16T19:00:09.000Z",
  },
  {
    media_id: 9626,
    filename: "dbbd.jpg",
    filesize: 60703,
    title: "Miika",
    description: "My Photo",
    user_id: 3671,
    media_type: "image/jpeg",
    created_at: "2023-10-13T12:14:26.000Z",
  },
  {
    media_id: 9625,
    filename: "2f9b.jpg",
    filesize: 30635,
    title: "Aksux",
    description: "friends",
    user_id: 260,
    media_type: "image/jpeg",
    created_at: "2023-10-12T20:03:08.000Z",
  },
  {
    media_id: 9592,
    filename: "f504.jpg",
    filesize: 48975,
    title: "Desert",
    description: "",
    user_id: 3609,
    media_type: "image/jpeg",
    created_at: "2023-10-12T06:59:05.000Z",
  },
  {
    media_id: 9590,
    filename: "60ac.jpg",
    filesize: 23829,
    title: "Basement",
    description: "Light setup in basement",
    user_id: 305,
    media_type: "image/jpeg",
    created_at: "2023-10-12T06:56:41.000Z",
  },
];

/**
 * Get all media request handler
 *
 * @param {object} req - http request
 * @param {object} res - http response
 */
const getMedia = (req, res) => {
  res.json(mediaItems);
};

/**
 * Get media by id
 * @param {Object}} req
 * @param {Object}} res
 */
const getMediaById = (req, res) => {
  // if item with id exists send it, otherwise send 404
  console.log("getMediaById", req.params);
  const media = mediaItems.find((element) => element.media_id == req.params.id);
  if (media) {
    res.json(media);
  } else {
    res.status(404);
    res.json({ message: "Media not found." });
  }
};

/**
 * Add a new media
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const postMedia = (req, res) => {
  console.log("new media posted", req.body);
  if (req.body.filename) {
    const id = mediaItems.length + 1; // Generate a new id + 1 from previous id
    mediaItems.push({
      media_id: newId,
      filename: req.body.filename,
      title: req.body.title,
      description: req.body.description,
      user_id: req.body.user_id,
      media_type: req.body.media_type,
      created_at: req.body.created_at,
    });
    res.status(201).json({ media_id, filename: req.body.filename });
  } else {
    res.status(400).json({ message: "Bad request." });
  }
};

// Modify media
/**
 * Modify media by its :ID
 *
 * @param {object} req - http request
 * @param {object} res - http response
 */
const putMedia = (req, res) => {
  const id = parseInt(req.params.id);
  const index = mediaItems.findIndex((element) => element.media_id === id);

  if (index !== -1) {
    mediaItems[index].title = req.body.title;
    mediaItems[index].description = req.body.description;
    console.log(index);
    res.status(200).json({ message: `Media with id ${id} updated.` });
  } else {
    res.status(404).json({ message: "Media not found" });
  }
};

// Remove existing media
/**
 * Delete media by its :ID
 *
 * @param {object} req - http request
 * @param {object} res - http response
 */
const deleteMedia = (req, res) => {
  const id = parseInt(req.params.id);
  const index = mediaItems.findIndex((element) => element.media_id === id);

  if (index !== -1) {
    mediaItems.splice(index, 1);
    res.status(200).json({ message: `Media with ${id} id deleted.` });
  } else {
    res.status(404).json({ message: "Media not found" });
  }
};

export { getMedia, getMediaById, postMedia, putMedia, deleteMedia };
