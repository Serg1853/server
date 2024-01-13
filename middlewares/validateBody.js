import Joi from "joi";

const validateBody = (req, res, next) => {
  const schema = Joi.object({
    fileName: Joi.string().required(),
    content: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  next();
};

export default validateBody;
