data = require './data.json';

#findSiblingEvents = (eventId) ->
#  iterateChildNodes = (node) ->
#    if(node.children?)
#      node.children.forEach((obj) ->
#        console.log(obj.type, obj.id, obj.name)
#        if(obj.type == 'EVENT' and obj.id == eventId)
#          return node
#        else
#          iterateChildNodes(obj)
#      )
#    null
#  iterateChildNodes(data)



#findEventParentNode = (eventId, arr = []) ->
#  iterateChildNodes = (node) ->
#    i = 0
#    if(node.children?)
#      while i < node.children.length
#        if(node.children[i].type == 'EVENT' and node.children[i].id == eventId)
#          return node
#        else
#          result = iterateChildNodes(node.children[i])
#          return result if result
#        i++
#
#    null
#  iterateChildNodes(data)

findEventParentNode = (eventId, result) ->
  iterateChildNodes = (node) ->
    i = 0
    if(node.type == 'EVENT_TYPE')
      result.eventType = node.name
    if(node.children?)
      while i < node.children.length
        if(node.children[i].type == 'EVENT' and node.children[i].id == eventId)
          result.parentNode = node
          return node
        else
          returnValue = iterateChildNodes(node.children[i])
          return returnValue if returnValue
        i++

    null
  iterateChildNodes(data)

findMarketNode = (marketId, result) ->
  iterateChildNodes = (node) ->
    i = 0
    if(node.type == 'EVENT_TYPE')
      result.eventType = node.name
    if(node.children?)
      while i < node.children.length
        if(node.children[i].type == 'MARKET' and node.children[i].id == marketId)
          result.market = node.children[i]
          return node.children[i]
        else
          returnValue = iterateChildNodes(node.children[i])
          return returnValue if returnValue
        i++

    null
  iterateChildNodes(data)

findSiblingEvents = (node, events) ->
  iterateChildNodes = (node) ->
    i = 0
    if(node.children?)
      while i < node.children.length
        if(node.children[i].type == 'EVENT')
          events.push(node.children[i])
        else
          result = iterateChildNodes(node.children[i])
          if result
            return result
        i++
    null
  iterateChildNodes(node)

findAllMarkets = (node, markets = []) ->
  iterateChildNodes = (node) ->
    i = 0
    if(node.children?)
      while i < node.children.length
        if(node.children[i].type == 'MARKET')
          markets.push(node.children[i])
        else
          result = iterateChildNodes(node.children[i])
          if result
            return result
        i++
    null
  iterateChildNodes(node)

#result = { eventType: null, parentNode: null}
#x = findEventParentNode('29390114', result)
#console.log(result)

#result = { eventType: null, market: null }
#x = findMarketNode('1.154528999', result)
#console.log(result)
#events = []
#findSiblingEvents(x, events)
##console.log events
#markets = []
#findAllMarkets(x, markets)
#console.log(markets)

findParentNodeOfEventWithId = (navigationMenuData, eventId) ->
  iterateChildNodes = (node) ->
    i = 0
    if(node.children?)
      while i < node.children.length
        if( ['EVENT', 'RACE', 'GROUP', 'MARKET'].indexOf(node.children[i].type) > -1 and node.children[i].id == eventId)
          return node
        else
          returnValue = iterateChildNodes(node.children[i])
          console.log(node.children[i].id)
          return returnValue if returnValue
        i++
    null
  iterateChildNodes(navigationMenuData)

x = findParentNodeOfEventWithId(data, '1.160909495')
console.log(x)