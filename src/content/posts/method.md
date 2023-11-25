---
title: Under construction
desc: There was a website here once. It's gone now.
pubDate: Nov 17 2009
---

Structure is fundamental to the way we live life – we use it to refine, improve, and progress ourselves, and in return it helps give us a sense of purpose and ultimately defines our position in life. Our life’s structure is the amalgamation of our learned habits – from both our environment and our personality – from those we gain either positive or negative traits.

```cpp
#include <GL/glew.h>
#include <GLFW/glfw3.h>

#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <csignal>

#define ASSERT(x) \
  if (!(x))       \
  raise(SIGTRAP)

#define GLCALL(x) \
  glClearError(); \
  x;              \
  ASSERT(glLogCall(#x, __FILE__, __LINE__))

static void glClearError()
{
  while (glGetError() != GL_NO_ERROR)
    ;
}

struct ShaderSource
{
  std::string VertexSource;
  std::string FragmentSource;
};

static ShaderSource parseShader(const std::string &filePath)
{
  std::fstream stream(filePath);

  enum class ShaderType
  {
    NONE = -1,
    VERTEX = 0,
    FRAGMENT = 1
  };

  std::string line;
  std::stringstream ss[2];
  ShaderType type = ShaderType::NONE;

  while (getline(stream, line))
  {
    if (line.find("#shader") != std::string::npos)
    {
      if (line.find("vertex") != std::string::npos)
        type = ShaderType::VERTEX;
      else if (line.find("fragment") != std::string::npos)
        type = ShaderType::FRAGMENT;
    }
    else
    {
      ss[(int)type] << line << '\n';
    }
  }

  return {ss[0].str(), ss[1].str()};
}
```

We are integrated into this symbiotic relationship from all but the word go and it’s the key to how we live our lives as adults. In school you follow your teacher’s orders and are given set times to do certain tasks. Eventually the unfamiliar becomes familiar, apprehension turns to comfort, and order is once again achieved because you start to know what to expect with each passing day.
