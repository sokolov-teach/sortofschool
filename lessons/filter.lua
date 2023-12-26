function Image(el)
    if string.find(el.src, "%.mp4$") then
        local poster = string.gsub(el.src, "%.mp4$", ".png") -- Replace .mp4 with .png
        return pandoc.RawInline("html", '<video src="' .. el.src .. '" controls preload="none" poster="' .. poster .. '"><a href="' .. el.src .. '">Video</a></video>')
    end
end

function Pandoc (doc)
  -- Walk the blocks to shift the heading levels
  doc.blocks = doc.blocks:walk {
    Header = function (h)
      h.level = h.level + 0
      return h
    end
  }

  -- Create and number sections.
  doc.blocks = pandoc.utils.make_sections(true, nil, doc.blocks)

  -- Return the modified document
  return doc
end
