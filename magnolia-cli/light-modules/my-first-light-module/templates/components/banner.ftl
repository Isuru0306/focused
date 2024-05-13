[#if content.title?has_content]
  ${content.title}
[/#if]
 
[#if content.image?has_content]
  [#assign image = damfn.getAsset(content.image)!]
   
  [#if image?has_content]
    [#assign imageLink = image.link!]
 
      [#if imageLink?has_content]
        <img src="${imageLink}">
      [/#if]
  [/#if]
[/#if]